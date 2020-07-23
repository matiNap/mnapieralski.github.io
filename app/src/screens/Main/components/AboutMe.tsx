import React from "react";
import { RootState } from "../../../store";
import { connect } from "react-redux";
import { fetchAboutMe as fAboutMe } from "../../../slices/appSlice";

interface Props {
  aboutMe?: string | null;
  fetchAboutMe?: typeof fAboutMe;
}

class AboutMe extends React.Component<Props> {
  componentDidMount() {
    // if (this.props.fetchAboutMe) this.props.fetchAboutMe();
  }
  render() {
    const { aboutMe } = this.props;
    return <div className="about-me-text">{aboutMe}</div>;
  }
}

const mapStateToProps = (state: RootState) => ({ aboutMe: state.app.aboutMe });

export default connect(mapStateToProps, { fAboutMe })(AboutMe);
