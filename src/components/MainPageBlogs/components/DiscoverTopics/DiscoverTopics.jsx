import React from "react";
import Badge from "../../../Common/Badge/Badge";
import "./DİscoverTopics.scss";
import { Link } from "react-router-dom";
const titles = [
  { title: "Programming", id: 0 },
  { title: "Data Science", id: 1 },
  { title: "Technology", id: 2 },
  { title: "Self Improvement", id: 3 },
  { title: "Writing", id: 4 },
  { title: "Relationships", id: 5 },
  { title: "Machine Learning", id: 6 },
  { title: "Productivity", id: 7 },
  { title: "Politics", id: 8 },
];

function DiscoverTopics() {
  // const [position, setPosition] = useState(false);
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 450) {
  //       setPosition(true);
  //     } else {
  //       setPosition(false);
  //     }
  //   });
  // }, [position]);
  return (
    <div className="discoverMain">
      <h4>Discover more of what matters to you</h4>
      <div className="topics">
        {titles.map((item) => (
          <Badge
            title={item.title}
            color={"black"}
            backgroundColor={"#f2f2f2"}
          />
        ))}
      </div>
      <div className="seeTopics">
        <Link>See more topics</Link>
      </div>
    </div>
  );
}

export default DiscoverTopics;
