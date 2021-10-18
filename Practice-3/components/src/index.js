import React from "react";
import ReactDOM from "react-dom";
import faker from 'faker';
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
        <ApprovalCard>
            <CommentDetail
                author="Sam"
                timeAgo="Today at 4:45PM"
                comment="Woahh nice!"
                avatarURL={faker.image.avatar()}
            />
        </ApprovalCard>    
        <ApprovalCard>
            <CommentDetail
                author="Jane"
                timeAgo="Today at 2:00AM"
                comment="ahh, ok!"
                avatarURL={faker.image.avatar()}
            />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail
                author="Peter"
                timeAgo="Yesterday at 5:00PM"
                comment="damn, thats how its done"
                avatarURL={faker.image.avatar()}
            />
        </ApprovalCard>
        <ApprovalCard>Warning!</ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
