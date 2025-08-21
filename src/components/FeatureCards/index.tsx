import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";
import Heading from "@theme/Heading";
import NextIcon from "/icons/next.svg";

const FeatureList = [
  {
    title: "Voice API",
    Svg: require("@site/static/img/voice-api.jpg").default,
    description: (
      <p>
        The Intelsend Voice API offers a simple and secure way to create,
        control, and manage voice campaigns. With our Voice API, businesses can
        programmatically initiate outbound calls using HTTP requests or by
        integrating with{" "}
        <a href="https://github.com/intelsend/intelsend-node">
          our Node.js SDK
        </a>
        . Using HTTP callbacks, you can dynamically alter live calls and track
        call progress in real time. Inbound calls are easy to handle too — all
        you need is to configure a Voice API profile in our Customer Portal.
        Campaign flows can be customized using our XML-based format (VoXML),
        making it easy to add features like text-to-speech, call recordings, and
        interactive voice recognition. From simple notifications to complex IVR
        setups, Intelsend Voice API provides everything you need to deliver a
        quality calling experience.
      </p>
    ),
    route: "/docs/category/voice-api",
  },
  {
    title: "Messaging API",
    Svg: require("@site/static/img/sms-api.jpg").default,
    description: (
      <p>
        The Intelsend Messaging API makes it easy to send and receive SMS and
        MMS messages at scale. Whether you’re sending transactional
        notifications, promotional campaigns, or enabling two-way customer
        interactions, our Messaging API ensures fast, reliable delivery.
        Designed with security and scalability in mind, Intelsend helps your
        business engage customers more effectively while protecting sensitive
        data.
      </p>
    ),
    route: "/docs/category/sms-api",
  },
  {
    title: "Email API",
    Svg: require("@site/static/img/email-api.jpg").default,
    description: (
      <p>
        The Intelsend Email API enables businesses to deliver personalized,
        secure, and high-volume email campaigns. From transactional emails to
        promotional newsletters, our API makes it simple to connect with your
        audience. With advanced features like templating, tracking, and robust
        deliverability, Intelsend ensures your messages reach the inbox every
        time. Easily manage lists, monitor campaign performance, and automate
        follow-ups — all from our API or Customer Portal.
      </p>
    ),
    route: "/docs/category/email-api",
  },
];

const Feature_cards = () => {
  return (
    <div className={clsx("flex flex-row")}>
      {FeatureList.map((props, idx) => (
        <Card key={idx} {...props} index={idx} />
      ))}
      <br />
      <br />
    </div>
  );
};

function Card({ Svg, title, description, route, index }) {
  return (
    <div className={clsx(styles.card, { [styles.reverse]: index % 2 !== 0 })}>
      <div>
        <img src={Svg} alt="Logo" />
        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div>
        <div className="padding-horiz--md">
          <Heading as="h1">{title}</Heading>
          <p>{description}</p>
        </div>
        <Link
          className={`${styles.buttons} margin-horiz--md button button--lg`}
          to={route}
        >
          <div>Go to Our Documentation</div>
          <NextIcon />
        </Link>
      </div>
    </div>
  );
}

export default Feature_cards;
