import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
export default function Features() {
  return (
    <>
      <Container style={{ marginTop: "150px", marginBottom: "150px" }}>
        <Row>
          <Col>
            <h1 style={{ color: "darkslateblue" }}>Meetings Start Here!</h1>
            <br />
            <p className="text-justify" style={{ color: "lightslategray" }}>
              Let the participants know the purpose of teh meeting and product
              to be produced. Explain benefits of the meeting why it should be
              important to them and get them involved immediately throuh an
              engaegment question that furthers the meeting purpose. PlaMeetLog
              scheduling interface makes ir easy for your clients or colleagues
              to find a time to meet. And you can effortlessly customize meeting
              times,locations and more.
            </p>
          </Col>
          <Col>
            <Image
              rounded
              style={{ border: "1px solid gray" }}
              width="500px"
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            />
          </Col>
        </Row>
      </Container>

      <Container style={{ marginTop: "150px", marginBottom: "150px" }}>
        <Row>
          <Col>
            <Image
              rounded
              style={{ border: "1px solid gray" }}
              width="500px"
              src="https://images.ctfassets.net/p24lh3qexxeo/1aqU0LMTpo9WWGKtdhL70X/44e1b6fc4f6a759cb478483758b7e57a/Group_309.svg"
            />
          </Col>
          <Col>
            <h1 style={{ color: "darkslateblue" }}>
              Simplify 1:1 Meeting and more
            </h1>
            <br />
            <p className="text-justify" style={{ color: "lightslategray" }}>
              The easiest way for 2 busy people to find a time to meet. And 2 or
              more people also
              <br />
              <br />
              “Very simple and straight forward option for a scheduling meeting.
              You share a calendar with whomever you'd like and they indicate
              their availability.”
              <br />
              <br />
              “Scheduling via #PlanMeet&Log is so much better than going back
              and forth in a group email chain. My favorite feature is that
              respondents set reminders and can select dates they can attend
              "and" dates they can make work if absolutely necessary, which
              really helps when trying to coordinate schedules among a large
              group.”
            </p>
          </Col>
        </Row>
      </Container>

      <Container style={{ marginTop: "150px", marginBottom: "150px" }}>
        <Row>
          <Col>
            <h1 style={{ color: "darkslateblue" }}>
              ACCESS MEETINGS VIA MOBILE
            </h1>
            <p className="text-center" style={{ color: "lightslategray" }}>
              * Access all relevant meeting information on your mobile.
              <br />
              * Receive notifications of meeting updates..
              <br />* Respond to meeting requests while on the road.
            </p>
          </Col>
          <Col>
            <Image
              rounded
              style={{ border: "1px solid gray" }}
              width="500px"
              src="https://www.imore.com/sites/imore.com/files/styles/xlarge_wm_blw/public/field/image/2016/08/Calendars-5-iPhone-hero.jpg"
            />
          </Col>
        </Row>
      </Container>

      <Container
        className="text-center"
        style={{ marginTop: "150px", marginBottom: "150px" }}
      >
        <Row>
          <Col>
            <h1>FEATURES</h1>
            <h5>
              <p style={{ color: "lightslategray" }}>
                A feature set allows you to customize PlanMeet&LOg to your
                unique schedule needs
              </p>
            </h5>
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col>
            <div>
              <i className="fas fa-stopwatch fa-4x"></i>
              <h3 style={{ color: "darkslateblue" }}>Set Reminders</h3>
              <p style={{ color: "lightslategray" }}>
                You can set Reminders of Upcoming Meetings. Prevent no-shows
                with automated, customizable reminder emails to meeting
                attendees.
              </p>
            </div>
          </Col>
          <Col>
            <div>
              <i className="fas fa-video fa-4x"></i>
              <h3 style={{ color: "darkslateblue" }}>Video Calling</h3>
              <p style={{ color: "lightslategray" }}>
                Create meeting and make contact through vieeo call and Keep
                Track of all the Participants with our Revolutionary Attendance
                Feature.
              </p>
            </div>
          </Col>
          <Col>
            <div>
              <i className="fas fa-history fa-4x"></i>
              <h3 style={{ color: "darkslateblue" }}>History</h3>
              <p style={{ color: "lightslategray" }}>
                We keep track of all the Meeting history for you , So you don't
                have to worry.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container
        className="text-center"
        style={{ marginTop: "150px", marginBottom: "150px" }}
      >
        <Row>
          <Col>
            <div>
              <i class="fas fa-home fa-4x"></i>
              <h2 style={{ color: "darkslateblue" }}>Homepage</h2>
              <p style={{ color: "lightslategray" }}>
                All features functionality show on your homepage and it allows
                viewers to choose from multiple meeting types when scheduling a
                meeting with you.
              </p>
            </div>
          </Col>

          <Col>
            <div>
              <i className="fas fa-comment-dots fa-4x"></i>
              <h2 style={{ color: "darkslateblue" }}>Custom Questions</h2>
              <p style={{ color: "lightslategray" }}>
                Add text and selection questions to your booking page to get
                additional information from meeting requestors.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container
        className="text-center"
        style={{ marginTop: "150px", marginBottom: "150px" }}
      >
        <Row>
          <Col>
            <div>
              <i className="fas fa-history fa-4x"></i>
              <h3 style={{ color: "darkslateblue" }}>Check Availability</h3>
              <p style={{ color: "lightslategray" }}>
                Meeting Planner access the electronic calendar of the invitees
                to check if they can attend the meeting. And provide a set of
                dates on which participants would prefer the meeting to take
                place.
              </p>
            </div>
          </Col>

          <Col>
            <div>
              <i className="fas fa-envelope-open fa-4x"></i>
              <h2 style={{ color: "darkslateblue" }}>Email Confirmation</h2>
              <p style={{ color: "lightslategray" }}>
                Full ability to customize the confirmation email that's sent to
                meeting requestors after they book a meeting.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container
        className="text-center"
        style={{ marginTop: "150px", marginBottom: "150px" }}
      >
        <Row>
          <Col>
            <div>
              {/* <i className="fas fa-allergies fa-4x"></i> */}
              <Image
                style={{ border: "1px solid gray" }}
                width="200px"
                src="data:image/jpeg;base64,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"
              />
              <h3 style={{ color: "darkslateblue" }} className="mt-4">
                Mark Attendance
              </h3>
              <p style={{ color: "lightslategray" }}>
                Keep Track of all the Participants with our Revolutionary
                Attendance feature.
              </p>
            </div>
          </Col>
          <Col>
            <div>
              <Image
                style={{ border: "1px solid gray" }}
                width="200px"
                src="https://uploads-ssl.webflow.com/5f4e1d1b568b08fb5c0f7af3/5f4e1d1b568b08e0370f7b51_VyteGroup_1.svg"
              />
              <h3 style={{ color: "darkslateblue" }} className="mt-4">
                Smart group scheduling
              </h3>
              <p style={{ color: "lightslategray" }}>
                PlanMeet&Log can help you create events with multiple invitees.
                Invitees vote on their preferences and you confirm with a simple
                click.
              </p>
            </div>
          </Col>
          <Col>
            <div>
              <Image
                style={{ border: "1px solid gray" }}
                width="200px"
                src="data:image/jpeg;base64,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"
              />
              <h3 style={{ color: "darkslateblue" }} className="mt-4">
                Meeting Types
              </h3>
              <p style={{ color: "lightslategray" }}>
                Create as many meetings types as you need to manage unique
                settings for product demos, onboarding meetings, and more.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
