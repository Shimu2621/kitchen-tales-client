import axios from "axios";
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TeamsCard from "./teamsCard/TeamsCard";
import Container from "../../utils/container/Container";

const categories = [
  "View All",
  "Management",
  "Production",
  "Marketing",
  "Sales",
  "Operations",
];

const TeamMemberPage = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [activeCategory, setActiveCategory] = useState("View All");

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const url =
          activeCategory === "View All"
            ? "http://localhost:5000/api/members"
            : `http://localhost:5000/api/members/category/${activeCategory}`;
        const response = await axios.get(url);
        // console.log("Members:", response.data);
        setTeamMembers(response.data.data);
      } catch (error) {
        console.error("Error fetching team members:", error);
      }
    };
    fetchMembers();
  }, [activeCategory]);
  return (
    <div className="bg-orange-100">
      {/* ===================== Banner Section =================== */}
      <div className="relative mb-10">
        <img
          src="https://blog.trginternational.com/hs-fs/hubfs/team_work.jpg?width=644&name=team_work.jpg"
          className="w-full h-[40vh] md:h-[50vh] object-cover rounded-none shadow-lg"
          alt="Banner Image"
        />
        {/* opacity for shade */}
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-70 text-white">
          {/* text */}
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            The Faces Behind the Success
          </h2>
          <p className="md:text-2xl text-lg text-center font-semibold px-4">
            Behind every success story is a team of dedicated professionals. Get
            to know <br /> the people who make our mission possible!
          </p>
        </div>
      </div>

      <Container>
        {/* ================== Title Section ================ */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-red-800">Meet Our Team</h1>
          <p className="text-gray-500 font-semibold">
            Our team is a group of passionate individuals dedicated to making a
            difference.
            <br /> Meet the experts who bring our vision to life.
          </p>
        </div>

        {/* ======================== Tab Section ===================== */}
        <div className="text-center p-2 pb-16">
          <Tabs
            selectedIndex={categories.indexOf(activeCategory)}
            onSelect={(index) => setActiveCategory(categories[index])}
          >
            <TabList className="flex justify-center text-center font-bold mb-10">
              {categories.map((category) => (
                <Tab key={category}>
                  <h2
                    className={`px-2 py-2 text-gray-500 hover:text-red-800 ${
                      activeCategory === category
                        ? "text-gray-500"
                        : "hover:text-red-800"
                    }`}
                  >
                    {category}
                  </h2>
                </Tab>
              ))}
            </TabList>

            {categories.map((category) => (
              <TabPanel key={category}>
                {activeCategory === category && (
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-center gap-6 ">
                    {teamMembers.length > 0 ? (
                      teamMembers.map((member) => (
                        <TeamsCard key={member._id} member={member} />
                      ))
                    ) : (
                      <p className="text-center col-span-full text-gray-600">
                        No team members found in this category.
                      </p>
                    )}
                  </div>
                )}
              </TabPanel>
            ))}
          </Tabs>
        </div>
      </Container>
    </div>
  );
};

export default TeamMemberPage;
