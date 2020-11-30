import React from "react";
import { Button, Header, Image, Item, Segment } from "semantic-ui-react";
import { connect } from "react-redux";

const ActivityDetailedHeader = ({ activity }) => {
  const activityImageStyle = {
    filter: "brightness(30%)",
  };

  const activityImageTextStyle = {
    position: "absolute",
    bottom: "5%",
    left: "5%",
    width: "100%",
    height: "auto",
    color: "white",
  };
  return (
    <Segment.Group>
      <Segment basic attached="top" style={{ padding: "0" }}>
        <Image style={activityImageStyle} src={`/assets/categoryImages/${activity.category}.jpg`} fluid />
        <Segment basic style={activityImageTextStyle}>
          <Item.Group>
            <Item>
              <Item.Content>
                <Header
                  size="huge"
                  content={activity.title}
                  style={{ color: "white" }}
                />
                <p>{activity.date.split("T")[0]}</p>
                <p>
                  Hosted by <strong>Bob</strong>
                </p>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment>
      <Segment clearing attached="bottom">
        <Button color="teal">Join Activity</Button>
        <Button>Cancel attendance</Button>
        <Button color="orange" floated="right">
          Manage Event
        </Button>
      </Segment>
    </Segment.Group>
  );
};

export default connect(null)(ActivityDetailedHeader);