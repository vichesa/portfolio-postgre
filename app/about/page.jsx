import AboutTabs from "./aboutTabs";

const About = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="lg:w-3/4">
          <h1 className="text-4xl font-bold text-center lg:text-left">
            About Me
          </h1>
          <p className="py-10 text-[#ADB7BE]">
            Hello, my name is Yolana Vichesa. I am a Web Developer. In 2019 I
            completed my education at Institut Teknologi Bandung (ITB). In 2021
            I took a Web Development Bootcamp program for 4 months and graduated
            with the title of Top 5 Students.
          </p>
        </div>
        <div className="lg:ml-10">
          <AboutTabs />
        </div>
      </div>
    </section>
  );
};

export default About;
