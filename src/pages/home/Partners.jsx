import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import { Box } from "@mui/material";

const Partners = () => {
  return (
    <Box style={{ marginBottom: "4rem" }}>
      <Swiper
        style={{ width: "100%", height: "100%" }}
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 1200,
          disableOnInteraction: false,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide
          style={{
            textAlign: "center",
            fontSize: "18px",
            background: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{
              display: "block",
              width: "100%",
              height: "100",
              objectFit: "cover",
            }}
            src="https://img.freepik.com/free-vector/dome-logo-design-template_23-2149919618.jpg?w=826&t=st=1677162892~exp=1677163492~hmac=792153826fb0187abc95c23f02b91081848613a556b821ef8ca2c0e31aa243b6"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide
          style={{
            textAlign: "center",
            fontSize: "18px",
            background: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{
              display: "block",
              width: "100%",
              height: "100",
              objectFit: "cover",
            }}
            src="https://img.freepik.com/free-vector/tech-logotype_1043-9.jpg?w=826&t=st=1677213981~exp=1677214581~hmac=c6f1473b79b2ac74c81f37e36a9d19acf62e467e2f09ffc639b3840e1878c3ca"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide
          style={{
            textAlign: "center",
            fontSize: "18px",
            background: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{
              display: "block",
              width: "100%",
              height: "100",
              objectFit: "cover",
            }}
            src="https://img.freepik.com/free-vector/branding-identity-corporate-c-logo-vector-design-template_460848-13930.jpg?w=900&t=st=1677159421~exp=1677160021~hmac=6fad0c02f160c5776021286639c3c867544df0865152131cb2cf2286de4a2ee5"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            textAlign: "center",
            fontSize: "18px",
            background: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{
              display: "block",
              width: "100%",
              height: "100",
              objectFit: "cover",
            }}
            src="https://img.freepik.com/free-vector/connect-community-abstract-group-petal-logo_384344-2072.jpg?w=826&t=st=1677152889~exp=1677153489~hmac=d35e3ec295d5ceaf8b1c240496df8daaadf8a6dd94bcbc204838ecf8b461c304"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            textAlign: "center",
            fontSize: "18px",
            background: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{
              display: "block",
              width: "100%",
              height: "100",
              objectFit: "cover",
            }}
            src="https://img.freepik.com/free-vector/branding-identity-corporate-abstract-logo-vector-design-template_460848-13937.jpg?w=900&t=st=1677153105~exp=1677153705~hmac=808d05050c580ff418e5a6019d2423ca764ff5f949facdd120ec32f0a2edad01"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            textAlign: "center",
            fontSize: "18px",
            background: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{
              display: "block",
              width: "100%",
              height: "100",
              objectFit: "cover",
            }}
            src="https://img.freepik.com/free-vector/blue-real-estate-logo_1061-177.jpg?w=826&t=st=1677214091~exp=1677214691~hmac=73ff94c6a5a2bd4c46985cda339428db2545bd4cc9c9b8e7299410e788a5b965"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            textAlign: "center",
            fontSize: "18px",
            background: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{
              display: "block",
              width: "100%",
              height: "100",
              objectFit: "cover",
            }}
            src="https://img.freepik.com/free-vector/blue-abstract-logo_1061-214.jpg?w=826&t=st=1677153246~exp=1677153846~hmac=3777272bc11d377534dfb25c9987d96668b92dc454d4ca5d52ff9f8a79b4f3cc"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            textAlign: "center",
            fontSize: "18px",
            background: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{
              display: "block",
              width: "100%",
              height: "100",
              objectFit: "cover",
            }}
            src="https://img.freepik.com/free-vector/letter-n-abstract-colorful-logo_487879-523.jpg?w=826&t=st=1677215597~exp=1677216197~hmac=1c3d4e98ea8f26d678bdb07d590a15452222cc94a3744ad6efda495c66404239"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            textAlign: "center",
            fontSize: "18px",
            background: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{
              display: "block",
              width: "100%",
              height: "100",
              objectFit: "cover",
            }}
            src="https://img.freepik.com/free-vector/letter-s-logo-negative-space-style-corporate-business-emblem-logotype_126523-2780.jpg?w=1060&t=st=1677159623~exp=1677160223~hmac=2764b31104687cb78287dfece251346289e4005937b7e1f78e74a1c71f295441"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            textAlign: "center",
            fontSize: "18px",
            background: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{
              display: "block",
              width: "100%",
              height: "100",
              objectFit: "cover",
            }}
            src="https://img.freepik.com/free-vector/quill-pen-logo-design_23-2149904153.jpg?w=826&t=st=1677331902~exp=1677332502~hmac=61bed44f5076277269b388e999f71a0d988a71486cd5ff35317f02c21054caea"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide
          style={{
            textAlign: "center",
            fontSize: "18px",
            background: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{
              display: "block",
              width: "100%",
              height: "100",
              objectFit: "cover",
            }}
            src="https://img.freepik.com/free-vector/blue-real-estate-logo_1061-177.jpg?w=826&t=st=1677214091~exp=1677214691~hmac=73ff94c6a5a2bd4c46985cda339428db2545bd4cc9c9b8e7299410e788a5b965"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Partners;
