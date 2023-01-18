import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";


const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;
  const gifs = ["https://64.media.tumblr.com/68bd674e9f4a2cd0f24f85540fd729f3/29f008c37e133aa5-50/s540x810/9faa37f56662fc6a40fd4ace300e005c32930fd3.gif", 
  "https://cdn.vox-cdn.com/uploads/chorus_asset/file/4185857/giphy__4_.0.gif", 
  "https://media.tenor.com/zDs5Vi1gL_YAAAAC/the-truman-show-jim-carrey.gif",
"https://media.tenor.com/JJ9gLUTMRZsAAAAC/12angry-men-black-and-white.gif",
"https://media0.giphy.com/media/NhxjJwPt4mAUM/giphy.gif?cid=ecf05e47ut6sryvgc2yolgr262iha6ftabj14vyymiu1ns24&rid=giphy.gif&ct=g",
"https://media0.giphy.com/media/xTiTnIKs5Cmh9iwCSk/giphy.gif?cid=ecf05e47v46ky2n9fi7h494hdu6r1ghj47g85qdisqfdojfs&rid=giphy.gif&ct=g",
"https://media2.giphy.com/media/l3vR4CdLInXOhr3rO/giphy.gif?cid=ecf05e47qio8rjptvzp2lyqfqrn1gl2pyqn9jopvov07vpuk&rid=giphy.gif&ct=g",
"https://media2.giphy.com/media/3o85xKUyRXql7rdHnq/giphy.gif?cid=ecf05e474ta7apdj4yhptwgjqutx13lw9dn4bihpgg7w8caj&rid=giphy.gif&ct=g",
"https://media3.giphy.com/media/uWMwQYgYVHVGU/giphy.gif?cid=ecf05e47tk00r6xsk5627b9h5a1i2vr66r0py8i2hj5tf5c8&rid=giphy.gif&ct=g",
"https://media3.giphy.com/media/CHYjhfBd34tCE/giphy.gif?cid=ecf05e47ozjms4f4q3f7qwt5ofd3vw0cwhodha4ilwkmzmhw&rid=giphy.gif&ct=g",
"https://c.tenor.com/JJ9gLUTMRZsAAAAC/12angry-men-black-and-white.gif",
"https://64.media.tumblr.com/tumblr_m9pwrkfW2k1rtmzuto1_500.gif",
"https://64.media.tumblr.com/0e44ddd910d57984df6c74f1925ea018/094d23d941f625c2-bd/s540x810/a63e9c68ac6ef3186256b24a26de4d1b134edcff.gif"];
 
  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsorluk
        </Typography>
        <Typography color={medium}>Reklam oluştur</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        
        src={gifs[Math.floor(Math.random() * 13)]}
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Netflix</Typography>
        <Typography color={medium}>www.netflix.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
      Televizyonunuzda izleyebilirsiniz.
       Akıllı TV, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray oynatıcılar ve daha fazlasında seyredin.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
