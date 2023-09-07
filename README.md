Task title: Frontend Page Creation with Specific Elements
Frontend
Frontend
Created 04-09-2023 16:01:19

Objective: Develop and host a web page using HTML and CSS that showcases specific personal and real-time data attributes. Each required element should have a specified data-testid attribute for easy identification and testing.

Requirements:

Slack Name:
Display your Slack name prominently.
Attribute: data-testid="slackUserName"
 

Slack Display Picture:
Showcase your Slack profile picture.
The image's alt attribute should be your Slack username.
Attribute: data-testid="slackDisplayImage"
 

Current Day of the Week:
Indicate the current day of the week (e.g., Monday, Tuesday).
Attribute: data-testid="currentDayOfTheWeek"
 

Current UTC Time:
Display the current UTC time.
Attribute: data-testid="currentUTCTime"
 

Track:
Mention your track (e.g Frontend).
Attribute: data-testid="myTrack"
 

GitHub URL:

Provide a clickable link to your GitHub repository where the source code for this task resides.
Attribute: data-testid="githubURL"
 

Acceptance Criteria:

 

Accuracy: Your Slack name, Slack display picture, and track information should be accurate and correspond to the actual data.
Real-time Elements: The displayed day of the week and UTC time should be current. The UTC time should be accurate within a margin of +/- 10 seconds.
Data-TestID Adherence: Every specified detail on the page should correctly have the data-testid attribute as indicated above, ensuring easy identification during any potential testing.
