import { Container, Text } from "@chakra-ui/react";
import React from "react";
// import ReactMarkdown from "react-markdown";

const Summary = ({ data }) => {
  const markdown = data[0].summary;
  // console.log(markdown);
  return (
    <>
      <Text fontSize="2xl">{data[0].title} Summary</Text>
      {/* <ReactMarkdown>{markdown}</ReactMarkdown> */}
      {/* <ReactMarkdown>
        **Latest Update** This update will add a Zeta and Alpha trim for the
        Fronx 1.2\\n **Price** Maruti Fronx price ranges between Rs. 9.02 Lakh -
        Rs. 16.24 Lakh depending on the variant selected. **When was the Maruti
        Fronx launched?** The Maruti Suzuki Fronx was launched in India on 24
        April, 2023. **What variants does it get?** The Baleno-based Fronx is
        available in five variants – Sigma, Delta, Delta+, Zeta, and Alpha.
        **What features are available in the Maruti Fronx?** On the outside, the
        Fronx features LED headlamps, LED tail lights, 16-inch dual-tone alloy
        wheels, contrast-coloured faux skid plates, and silver roof rails. The
        model, which has a seating capacity of five occupants, is offered in
        nine colours, namely Arctic White, Grandeur Grey, Earthen Brown,
        Splendid Silver, Opulent Red, Earthen Brown with Bluish Black roof,
        Opulent Red with Bluish Black roof, and Splendid Silver with a Bluish
        Black roof. Inside, the model receives features such as six airbags, a
        360-degree camera, HUD, a nine-inch SmartPlay Pro+ touchscreen
        infotainment system, Apple CarPlay and Android Auto connectivity, cruise
        control, UV cut glass, rear AC vents, and a wireless charger. **What are
        the engine, performance, and specifications of the Maruti Fronx?** The
        Maruti Fronx is powered by a 1.2-litre, four-cylinder, NA petrol engine
        that generates an output of 89bhp and 113Nm of torque and a 1.0-litre,
        three-cylinder, turbo-petrol engine that produces 99bhp and 147Nm of
        torque. Gearbox options include a five-speed manual unit, an AMT unit,
        and a six-speed torque converter automatic unit. **Is the Maruti Fronx a
        safe car?** The Fronx coupe-SUV has not been tested by any NCAP body
        yet. **What are the rivals to the Maruti Fronx?** The Fronx competes
        against the Hyundai Venue, Kia Sonet, Renault Kiger, Nissan Magnite,
        Mahindra XUV300, and Tata Nexon.
      </ReactMarkdown> */}
    </>
  );
};

export default Summary;
