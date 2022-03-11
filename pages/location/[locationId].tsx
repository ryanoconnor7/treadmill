import { onValue, ref } from "@firebase/database";
import _ from "lodash";
import moment from "moment";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import styles from "../../styles/Home.module.css";
import { LocationResponse } from "../../types/Firebase";
import { db } from "../_app";

interface Status {
  total: number;
  occupied: number;
}

const LocationStatus = (props: { location: LocationResponse }) => {
  const { location } = props;

  let statusMap: { [key: string]: Status } = {};
  let lastTimestamp = undefined;
  location.cameras.forEach((cam) => {
    const lastUpdate = cam.updates[cam.updates.length - 1];
    cam.units.forEach((unit, index) => {
      if (!statusMap[unit.type]) {
        statusMap[unit.type] = { total: 0, occupied: 0 };
      }

      statusMap[unit.type].total += 1;
      if (lastUpdate?.occupancy[index]) {
        statusMap[unit.type].occupied += 1;
      }
    });

    if ((lastTimestamp ?? 0) < lastUpdate.timestamp) {
      lastTimestamp = lastUpdate.timestamp;
    }
  });

  return (
    <>
      <Head>
        <title>{location.name} Gym Capacity</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>{location.name} Gym Capacity</h1>

        <h3 style={{ fontStyle: "italic", fontWeight: "normal", marginTop: 0 }}>
          Last updated{" "}
          {lastTimestamp ? moment.unix(lastTimestamp).fromNow() : "unknown"}
        </h3>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            maxWidth: 400,
            textAlign: "center",
          }}
        >
          {Object.entries(statusMap).map((val) => {
            const pct = val[1].occupied / val[1].total;

            return (
              <div
                className={styles.card}
                style={{ width: 200, flex: 1, flexGrow: 1 }}
              >
                <CircularProgressbar
                  value={pct}
                  maxValue={2}
                  text={`${val[1].occupied}/${val[1].total}`}
                  styles={{
                    // Customize the root svg element
                    root: {},
                    // Customize the path, i.e. the "completed progress"
                    path: {
                      // Path color
                      stroke: `rgba(62, 152, 199, ${pct / 100})`,
                      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                      strokeLinecap: "butt",
                      // Customize transition animation
                      transition: "stroke-dashoffset 0.5s ease 0s",
                      // Rotate the path
                      transform: "rotate(0.25turn)",
                      transformOrigin: "center center",
                    },
                    // Customize the circle behind the path, i.e. the "total progress"
                    trail: {
                      // Trail color
                      stroke: "#d6d6d6",
                      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                      strokeLinecap: "butt",
                      // Rotate the trail
                      transform: "rotate(0.25turn)",
                      transformOrigin: "center center",
                    },
                    // Customize the text
                    text: {
                      // Text color
                      fill: "#f88",
                      // Text size
                      fontSize: "22px",
                      fontWeight: "700",
                    },
                  }}
                />
                <p className={styles.description}>{val[0]}</p>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

const LocationPage = () => {
  const router = useRouter();
  const { locationId } = router.query;
  const [location, setLocation] = useState(undefined);

  useEffect(() => {
    console.log("Searching", `locations/${locationId ?? "demo"}`);
    const locationRef = ref(db, `locations/${locationId ?? "demo"}`);
    onValue(
      locationRef,
      (snapshot) => {
        console.log(snapshot.val());
        setLocation(snapshot.val() ?? null);
      },
      (e) => {
        setLocation(null);
      }
    );
  }, []);

  return (
    <div className={styles.container}>
      {location === undefined ? (
        <p>Loading...</p>
      ) : location === null ? (
        <p>Location Not Found</p>
      ) : (
        <LocationStatus location={location} />
      )}
    </div>
  );
};

export default LocationPage;
