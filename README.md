# Ux Developer Challenge

**Overview**

The Social Media Dashboard is a front-end application designed to provide users with a comprehensive view of key metrics across four major social media platforms: Facebook, Twitter, Instagram, and YouTube. Users can track their followers, subscribers, and other relevant metrics in a centralized dashboard, allowing for a quick and efficient analysis of social media performance.

## Getting Started

**Client:** React, Styled Components, ReCharts

### Prerequisites

Ensure you have the following installed before running the application:
- npm (Node Package Manager)

### Installation

*Clone the repository*
```bash
  git clone https://github.com/Joaco96/UxDev-Challenge.git
```
*Navigate to the project folder*
```bash
  cd UxDev-Challenge
```
*Install dependencies*
```bash
  npm install
```

### Running the application
*Run the application locally*
```bash
  npm run dev
```
Visit http://localhost:5173 in your web browser to access the dashboard.

### Deployment

To deploy this project run:

```bash
  npm run build
```

## Root Styles (Feel free to Override)
```javascript
:root {
  /**Color Pallete**/

  /*Primary*/
  --limegreen: hsl(163, 72%, 41%);
  --brightred: hsl(356, 69%, 56%);
  --colortwitter: hsl(195, 100%, 50%);
  --colorfacebook: hsl(203, 89%, 53%);
  --colorinstagram: linear-gradient(to right,hsl(37, 97%, 70%), hsl(329, 70%, 58%));
  --coloryouTube: hsl(348, 97%, 39%);
  
  /*Toggle Button*/
  --toggle-darkmode: linear-gradient(to right,hsl(210, 78%, 56%), hsl(146, 68%, 55%));
  --toggle-lightmode: hsl(230, 22%, 74%);

  /*Layout Dark Theme*/
  --bg-darkmode: hsl(230, 17%, 14%);
  --topbg-darkmode: hsl(232, 19%, 15%);
  --cardbg-darkmode: hsl(228, 28%, 20%);
  --cardbg-hover-darkmode: #333A56;
  --textsecondary-darkmode: hsl(228, 34%, 66%);
  --textprimary-darkmode: hsl(0, 0%, 100%);
  --chart-darkmode: hsl(243, 51%, 70%);

  /*Layout Light Theme*/
  --bg-lightmode: hsl(0, 0%, 100%);
  --topbg-lightmode: hsl(225, 100%, 98%);
  --cardbg-lightmode: hsl(227, 47%, 96%);
  --cardbg-hover-lightmode: #E1E3F0;
  --textsecondary-lightmode: hsl(228, 12%, 44%);
  --textprimary-lightmode: hsl(230, 17%, 14%);
  --chart-lightmode: hsl(243, 51%, 70%);

  /**Fonts**/
  --inter: 'Inter', sans-serif;
```

## Reusable Components

**1) MainCard**

```javascript
<MainCard
  icon={ } // Social Media Icon - svg/img
  borderColor={""} // Social Media Top Color - string (default -> #000000)
  userName={""} // Social Media User Name - string
  quantity={""} // Social Media followers/subscribers - string
  variationChart={""} // Variation Numbers of followers/subscribers for Chart - string
  dataName={""} // Followers / Subscribers - string
  variation={""} // Variation Numbers of followers/subscribers - string
  positive={} // If variation number is positive or negative - boolean (default -> true)
  darkMode={} // If the App is in Dark Mode - boolean (default -> true)
  social={""} // Social Media Platform - string
></MainCard>
```

**2) OverviewCard**

```javascript
<OverviewCard
  title={""} // Social Media Event - string
  icon={ } // Social Media Icon - svg/img
  number={""} // Quantity of events - string
  variation={""} // Variation Numbers of followers/subscribers - string
  positive={} // If variation number is positive or negative - boolean (default -> true)
  darkMode={} // If the App is in Dark Mode - boolean (default -> true)
></OverviewCard>
```

## Responsive Decision-making Process

The decision making for this project regarding responsive design was based on rearranging the structure of the application as the resolution changes.
We will list the changes made in descending order:

**General Layout:**

As a challenge for the responsive design, we noticed that as we approached the 1024p resolution, the MainCard components began to pile up, making it difficult to read their content.

*Changes:*

1024p: General margins and card gaps are modified, as well as changed from 4 to 2 columns for MainCards.

768p: OverviewCards are grouped into 2 columns instead of 4.

425p: The gaps of the Cards are modified as well as the Main Cards are grouped into a single column.

**Chart Modal:**

On the other hand, the ChartModal data in the 768p resolution was unreadable and exceeded the limits of the modal itself.

*Changes:*

1300p: The width of the modal is enlarged.

1024p: Fonts and internal margins are reduced and the chart margins and ticks are reduced.

768p: The display of numerical data was restructured, going from row to column.

## Demo

https://uxdev-challenge.netlify.app/

## Author

- [Joaquín Cortés](https://www.github.com/Joaco96)