import { React } from "react";
import { Link } from "react-router-dom";
import './styles.css'

function LearnMoreButton() {
  return (
    <Link to={"/aboutus"}>
      <button class="learn-more">
        <span class="circle" aria-hidden="true">
          <span class="icon arrow"></span>
        </span>
        <span class="button-text">Learn More</span>
      </button>
    </Link>
  );
}

export default LearnMoreButton;
