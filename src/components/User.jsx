import { connect } from "react-redux";
import PropTypes from "prop-types";

const User = ({ firstName, lastName, profilePicture }) => {
  return (
    <div className="user">
      <div className="user-wrap">
        <div className="user-photo">
          <img src={profilePicture} alt={`${firstName} ${lastName}`} />
        </div>
        <div className="user-fname">{firstName}</div>
        <div className="user-lname">{lastName}</div>

        <div className="user-company"></div>
      </div>
    </div>
  );
};

User.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  profilePicture: PropTypes.string.isRequired,
};

const mapStateToProps = ({
  userReducer: { firstName, lastName, profilePicture },
}) => ({
  firstName,
  lastName,
  profilePicture,
});

export default connect(mapStateToProps, null)(User);
