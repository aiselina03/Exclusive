import React from "react";
import "./style.scss";

function MusicJBL() {
  return (
    <div className="music">
      <div className="text">
        <p>Categories</p>
        <h1>Enhance Your Music Experience</h1>
        <div className="dates">
          <div className="date">
            <p>
              23 <br />
              Hours
            </p>
          </div>
          <div className="date">
            <p>
              05 <br />
              Days
            </p>
          </div>
          <div className="date">
            <p>
              59 <br />
              Minutes
            </p>
          </div>
          <div className="date">
            <p>
              35 <br />
              Second
            </p>
          </div>
        </div>
        <button>Buy Now!</button>
      </div>
      <div className="image">
        <img
          src="https://s3-alpha-sig.figma.com/img/3cc9/43ca/7e210f637fc0504b7d93cd207df744c2?Expires=1703462400&Signature=LwgvMKT11ng-1VTfkz~I7wcxlaUSEHB4Mh2uRnbDEJVGVUQA46NFf57SzM9ykOpkZlSy5IpgSFcTIMdcwCSFFktMScgab5H2Vb5htUycLp07plx59U6DQpM~fucs0qvl6wagJ9-vjCAcLPZg2VLU0R2fjUzEX0o8XopnFoLnTtkjTBOFGCoBK~1t8j-1ath-dyMFpBm-Ghr9N76paPhBobt8SrU3Knmxl47RLZZNqWNY3rlxzqyBZwW-j3Tem53PZ4lyS9cjZB4ySBlcsHHtjc1RoVY3OcI04jv09NfkJt1jHYiteHwWIUtC4h8N9dlVrYrvmKsBVjFBjwHNnsNSkQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
        />
      </div>
    </div>
  );
}

export default MusicJBL;
