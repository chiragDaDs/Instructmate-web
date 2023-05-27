import {
  createStyles,
  Header,
  Menu,
  Group,
  Center,
  Burger,
  Container,
  rem,
} from "@mantine/core";
import {handleCallbackResponse} from "./googleLoginUtils"
import { useDisclosure } from "@mantine/hooks";
import { useEffect } from "react";
// import Image from 'next/image';
const logoAspectRatio = 2.36;
const kidsImageAspectRatio = 1.076;
const logoHeight = 95;
const kidsImageHeight = 310;

interface HeaderSearchProps {
  links: {
    link: string;
    label: string;
    links: { link: string; label: string }[];
  }[];
}



export function LandingPageHeader() {
  const [opened, { toggle }] = useDisclosure(false);
  const googleSignInCallback = function (dict: any) {
    console.log("google sign");
    console.log(dict);
  };
  useEffect(() => {
    /* global google */
    try{google.accounts.id.initialize({
      client_id:
        "1046919804990-aemivfve0lr1dea5jrt8oir7uuk16t3e.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("sign InDiv"), {
      theme: "filled_black",
      text:"continue_with",
      size: "large",
      shape: "pill",
    });}
    catch(err) {
      console.log(err);
    }
  }, []);
  const backgroundStyle = {
    // background:" rgb(251,79,20)",
    background:
      "linear-gradient(144deg, rgba(255,100,43,1) 45%, rgba(250,200,152,1) 55%, rgba(255,245,238,1) 100%)"  };
  return (
    <Header
      height={306}
      className="text-white"
      style={backgroundStyle}
      mb={120}
    >
      <Container className="grid-cols-1">
        <header className="flex justify-between w-full">
          <img
            src="/logos/center_full.png"
            className=""
            alt={""}
            height={logoHeight}
            width={logoHeight * logoAspectRatio}
          />
          <Group spacing={5}>
            <div id="sign InDiv"></div>
          </Group>
        </header>
        <div className="flex justify-around">
          <img
            src="/images/kids_front.png"
            className="mt-[-15px]"
            alt={""}
            height={kidsImageHeight}
            width={kidsImageAspectRatio * kidsImageHeight}
          />
        </div>
      </Container>
    </Header>
  );
}
