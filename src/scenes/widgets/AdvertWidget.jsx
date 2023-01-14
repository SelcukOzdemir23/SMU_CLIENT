import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

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
        src="https://akns-images.eonline.com/eol_images/Entire_Site/20221117/rs_500x281-221217100541-500-wednesday-jenna-ortega-dance-cjh-121722.gif?fit=around%7C500:281&output-quality=90&crop=500:281;center,top"
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
