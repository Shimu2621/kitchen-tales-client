import PropTypes from "prop-types";

const TeamsCard = ({ member }) => {
  return (
    <div className="p-4 bg-white border-2 border-orange-700 shadow-lg rounded-lg transition-transform transform hover:scale-105">
      {/* Image */}
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-48 sm:h-52 md:h-56 lg:h-60 object-cover rounded-md mb-4"
      />

      {/* Name */}
      <h3 className="text-lg sm:text-xl text-red-800 font-bold italic mb-2 text-center">
        {member.name}
      </h3>

      {/* Position */}
      <p className="text-sm sm:text-base text-gray-700 font-semibold text-center mb-2">
        Position:{" "}
        <span className="text-orange-800 font-bold">{member.position}</span>
      </p>

      {/* Bio */}
      <p className="text-sm text-gray-800 text-center">{member.bio}</p>

      {/* Social Links */}
      <div className="flex flex-wrap justify-center space-x-4 mt-4 mb-1">
        {member.socialLinks.linkedin && (
          <a
            href={member.socialLinks.linkedin}
            className="text-sm px-3 py-1 rounded-md border text-gray-600 hover:bg-orange-700 hover:text-white transition"
          >
            LinkedIn
          </a>
        )}
        {member.socialLinks.twitter && (
          <a
            href={member.socialLinks.twitter}
            className="text-sm px-3 py-1 rounded-md border text-gray-600 hover:bg-orange-700 hover:text-white transition"
          >
            Twitter
          </a>
        )}
      </div>
    </div>
  );
};

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
