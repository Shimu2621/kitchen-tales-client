import PropTypes from "prop-types";

const TeamsCard = ({ member }) => {
  return (
    <div className="p-4 bg-white border-2 border-orange-700 shadow-lg rounded-lg transition-transform transform  hover:scale-105">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-52 object-cover  mb-3"
      />
      <h3 className="text-xl text-red-800 font-bold italic">{member.name}</h3>
      <p className="text-gray-700 font-semibold mb-4">
        Position:{" "}
        <span className="text-orange-800 font-bold">{member.position}</span>
      </p>
      <p className="text-sm font-sans text-gray-800">{member.bio}</p>
      <div className="flex justify-center space-x-3 mt-4 mb-3">
        {member.socialLinks.linkedin && (
          <a
            href={member.socialLinks.linkedin}
            className="text-gray-600 p-2 rounded-badge border bottom-1 hover:bg-orange-700 hover:text-white"
          >
            LinkedIn
          </a>
        )}
        {member.socialLinks.twitter && (
          <a
            href={member.socialLinks.twitter}
            className="text-gray-600 p-2 rounded-badge border bottom-1 hover:bg-orange-700 hover:text-white"
          >
            Twitter
          </a>
        )}
      </div>
    </div>
  );
};

// **PropTypes Validation**
TeamsCard.propTypes = {
  member: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    socialLinks: PropTypes.shape({
      linkedin: PropTypes.string,
      twitter: PropTypes.string,
    }),
  }).isRequired,
};

export default TeamsCard;
