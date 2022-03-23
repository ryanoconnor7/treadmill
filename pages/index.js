import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Treadmill Traffic</title>
        <meta name="description" content="Find your spot at the gym" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Treadmill Traffic</h1>

        <p className={styles.description}>Find your spot at the gym</p>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            maxWidth: 600,
            textAlign: "center",
          }}
        >
          <div style={{ flex: 1, marginRight: 16 }}>
            <h2>Unit-By-Unit Capacity</h2>
            <p>
              Just want to run today? See the capacity of the treadmills,
              elliptical, or benches separately
            </p>
          </div>
          <div style={{ flex: 1, marginLeft: 16 }}>
            <h2>Updates in Realtime</h2>
            <p>Save time by checking if equipment is open before going</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            maxWidth: 600,
            textAlign: "center",
            marginTop: 16,
          }}
        >
          <div style={{ flex: 1, marginRight: 16 }}>
            <h2>No More Waiting</h2>
            <p>Get an alert when spots open up</p>
          </div>

          <div style={{ flex: 1, marginLeft: 16 }}>
            <h2>Avoid the Rush</h2>
            <p>
              Check when the gym was typically most crowded over the last week
            </p>
          </div>
        </div>
        <div
          style={{ marginTop: 48, borderRadius: 100 }}
          className={styles.card}
        >
          <Link style={{ color: "#0070f3" }} href="/location/demo">
            <h2 style={{ marginBottom: 0 }}>See a Demo &rarr;</h2>
          </Link>
        </div>
      </main>
    </div>
  );
}
