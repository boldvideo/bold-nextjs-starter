import { useEffect } from "react";
import { bold } from "../boldClient";
function HomePage() {
  console.log(bold);

  useEffect(() => {
    const start = async () => {
      const { data } = await bold.fetchSettings();
      const { data: latest } = await bold.fetchLatestVideos();
      console.log(data, latest);
    };
    start();
  }, []);

  return <div>Welcome to Next.js!</div>;
}

export default HomePage;
