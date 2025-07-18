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
            ? "https://kitchen-tales-server.onrender.com/api/members"
            : `https://kitchen-tales-server.onrender.com/api/members/category/${activeCategory}`;
        const response = await axios.get(url);
        setTeamMembers(response.data.data);
      } catch (error) {
        console.error("Error fetching team members:", error);
      }
    };
    fetchMembers();
  }, [activeCategory]);

  return (
    <div className="bg-orange-100">
      {/* Banner */}
      <div className="relative mb-10">
        <img
          src="https://blog.trginternational.com/hs-fs/hubfs/team_work.jpg?width=644&name=team_work.jpg"
          className="w-full h-[40vh] md:h-[50vh] object-cover shadow-lg"
          alt="Banner"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-70 text-white text-center px-4">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            The Faces Behind the Success
          </h2>
          <p className="text-sm sm:text-base md:text-xl font-semibold">
            Behind every success story is a team of dedicated professionals.
            <br className="hidden sm:block" />
            Get to know the people who make our mission possible!
          </p>
        </div>
      </div>

      <Container>
        {/* Title */}
        <div className="text-center mb-16 px-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-red-800 mb-2">
            Meet Our Team
          </h1>
          <p className="text-sm sm:text-base text-gray-600 font-medium">
            Our team is a group of passionate individuals dedicated to making a
            difference.
            <br className="hidden sm:block" />
            Meet the experts who bring our vision to life.
          </p>
        </div>

        {/* Tabs */}
        <div className="text-center px-2 pb-16">
          <Tabs
            selectedIndex={categories.indexOf(activeCategory)}
            onSelect={(index) => setActiveCategory(categories[index])}
          >
            <TabList className="flex flex-wrap justify-center gap-4 font-semibold mb-10">
              {categories.map((category) => (
                <Tab key={category}>
                  <button
                    className={`px-3 py-2 rounded-md border ${
                      activeCategory === category
                        ? "bg-red-800 text-white border-red-800"
                        : "text-gray-600 border-gray-300 hover:bg-red-100"
                    }`}
                  >
                    {category}
                  </button>
                </Tab>
              ))}
            </TabList>

            {categories.map((category) => (
              <TabPanel key={category}>
                {activeCategory === category && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
                    {teamMembers.length > 0 ? (
                      teamMembers.map((member) => (
                        <TeamsCard key={member._id} member={member} />
                      ))
                    ) : (
                      <p className="col-span-full text-center text-gray-600 text-lg">
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
