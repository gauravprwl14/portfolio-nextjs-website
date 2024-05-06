import { USER_OBJ, cn } from "@/lib/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const transformUserObj = (userObj) => {
  return {
    address: {
      title: "Address",
      text: `${userObj.address.city}, ${userObj.address.country}`,
      icon: userObj.address.icon,
      colorCode: "#f75023",
    },
    phone: {
      title: "Phone",
      text: `${userObj.phone.code} ${userObj.phone.number}`,
      icon: userObj.phone.icon,
    },
    email: {
      title: "Email",
      text: userObj.email.email,
      icon: userObj.email.icon,
    },
  };
};

const ContactUs = () => {
  const contactDetails = transformUserObj(USER_OBJ);

  return (
    <div className="contact-us-section h-auto w-full float-left clear-both mx-auto px-4 lg:px-10 bg-whiteLilac-100">
      <div className="w-full h-auto mx-auto max-w-screen-2xl mt-5 lg:mt-10 ">
        <div className="flex justify-center">
          <ContactTitle></ContactTitle>
        </div>

        <div className="flex flex-row  relative mt-20 mb-44">
          <div className="flex flex-1 flex-col">
            {" "}
            <div>Let&apos;s Work Together!</div>
            <div className="flex flex-col">
              {Object.keys(contactDetails).map((key, index) => {
                const data = contactDetails[key as keyof typeof contactDetails];
                return (
                  <ContactDetails key={index} data={data}></ContactDetails>
                );
              })}
            </div>
          </div>

          <div className="flex flex-1"> contact form</div>
          {/* <ContactForm data={data}></ContactForm> */}
        </div>
      </div>
    </div>
  );
};

const ContactDetails = ({
  data: { title, icon, text, colorCode },
}: {
  data: { title: string; text: string; icon: any; colorCode: string };
}) => {
  return (
    <div className="flex flex-1 ">
      {" "}
      <div className="list_inner">
        <div
          className={cn(
            `w-20 h-20 rounded-full flex justify-center items-center`
          )}
          style={{ backgroundColor: colorCode }}
        >
          <FontAwesomeIcon
            icon={icon}
            className={`text-[${colorCode}]  text-[#50d71e] max-w-6  lg:text-2xl ml-2 lg:max-w-8`}
          />
        </div>
        <div className="short">
          <h3>{title}</h3>
          <span>{text}</span>
        </div>
      </div>
    </div>
  );
};

const ContactTitle = () => {
  return (
    <div className="flex flex-1 w-full justify-center items-center my-5 px-5 text-center max-w-screen-sm lg:max-w-screen-lg">
      <div className="">
        <div className="relative text-2xl lg:text-4xl py-2 mb-6">
          <div className="">
            <p className=" text-blue-600 font-bold font-jost py-2">
              Contact Me
            </p>
            <p className="py-2">Ready to Transform Your Ideas Into Reality?</p>
          </div>
          <div className="bg-black h-1 absolute bottom-0 lg:-bottom-2 left-1/2 transform -translate-x-1/2 w-1/2 rounded-md"></div>
        </div>
        <div className="">
          <p>
            Whether you have a clear vision or need guidance in shaping your
            digital presence, I&apos;m here to help. As a versatile tech leader,
            I craft impactful websites and mobile apps that resonate with your
            audience. Let&apos;s collaborate to create something exceptional.
            Fill out the form below, and let&apos;s explore how we can bring
            your project to life together!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
