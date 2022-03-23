import { onValue, ref } from "@firebase/database";
import _ from "lodash";
import moment from "moment";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import styles from "../../styles/Home.module.css";
import { Camera, LocationResponse } from "../../types/Firebase";
import { db } from "../_app";

const parseState = (state: string): number[][] => {
  const rows = state.trim().split("\n");
  return rows.map((rowRaw) => {
    return rowRaw
      .trim()
      .split(" ")
      .map((v) => +v);
  });
};

const rotateMatrix90C = (source) => {
  // get the dimensions of the source matrix
  const M = source.length;
  const N = source[0].length;

  // create a new NxM destination array
  let destination = new Array(N);
  for (let i = 0; i < N; i++) {
    destination[i] = new Array(M);
  }

  // start copying from source into destination
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      destination[i][j] = source[M - j - 1][i];
    }
  }

  // return the destination matrix
  return destination;
};

const Camera = (props: { camera: Camera; index: number }) => {
  const lastUpdate = props.camera.updates[props.camera.updates.length - 1];

  const state = rotateMatrix90C(
    rotateMatrix90C(rotateMatrix90C(parseState(lastUpdate.state)))
  );
  // const state = parseState(lastUpdate.state);

  console.log();

  const height = state.length;
  const width = state[0].length;

  let min = 100;
  let max = 0;
  let total = 0;
  let avg = 0;

  state.forEach((r) => {
    r.forEach((c) => {
      if (c < min) {
        min = c;
      }

      if (c > max) {
        max = c;
      }

      total += c;
    });
  });

  avg = total / (height * width);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div>
        <h4>Camera {props.index}</h4>
        <h5 style={{ fontStyle: "italic", fontWeight: "normal", marginTop: 0 }}>
          Last updated{" "}
          {lastUpdate?.timestamp
            ? moment.unix(lastUpdate?.timestamp / 1000).fromNow()
            : "unknown"}
        </h5>
        <h5>Height: {height}</h5>
        <h5>Width: {width}</h5>
        <h5>Min: {min.toFixed(1)}</h5>
        <h5>Max: {max.toFixed(1)}</h5>
        <h5>Avg: {avg.toFixed(1)}</h5>
      </div>
      <div>
        {state.map((row, rowIndex) => {
          return (
            <div style={{ display: "flex", flexDirection: "row" }}>
              {row.map((col, colIndex) => {
                const pct = (col - min) / (max - min);
                const red = pct * 255;
                const green = 255 - red;
                return (
                  <>
                    {colIndex === 0 && (
                      <p
                        style={{
                          margin: 0,
                          marginTop: 4,
                          fontVariant: "tabular-nums",
                          fontSize: 14,
                        }}
                      >
                        {rowIndex < 10 ? "0" : ""}
                        {rowIndex}
                      </p>
                    )}
                    <div>
                      {rowIndex === 0 && (
                        <p
                          style={{
                            margin: 0,
                            marginLeft: 8,
                            fontVariant: "tabular-nums",
                            fontSize: 14,
                          }}
                        >
                          {colIndex < 10 ? "0" : ""}
                          {colIndex}
                        </p>
                      )}
                      <p
                        style={{
                          margin: 4,
                          fontVariant: "tabular-nums",
                          fontSize: 14,
                          fontWeight: "400",
                          backgroundColor: `rgb(${red}, ${green}, 0)`,
                        }}
                      >
                        {col.toFixed(1)}
                      </p>
                    </div>
                  </>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const DebugDetail = (props: { location: LocationResponse }) => {
  return (
    <h2>
      Debug: {props.location.name}
      {props.location.cameras.map((c, i) => (
        <Camera camera={c} index={i} />
      ))}
    </h2>
  );
};

const DebugPage = () => {
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
        <DebugDetail location={location} />
      )}
    </div>
  );
};

export default DebugPage;
