import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { USER_OBJ, cn } from "@/lib/utils";
import DynamicForm from "./contactForm";

// generate a styling object for Address, Phone, and Email so that in the future we add more styling object, we can easily add them in terms of styling and classes

interface GenericStyles {
  bgColor: string;
  iconColor: string;
  fontSize: string;
  // Add more properties for the generic styling if needed
}

const transformUserObj = (userObj) => {
  return {
    address: {
      title: "Address",
      text: `${userObj.address.city}, ${userObj.address.country}`,
      icon: userObj.address.icon,
      style: {
        bgColor: "#FEDFD7",
        iconColor: "#F75023",
      },
    },
    phone: {
      title: "Phone",
      text: `${userObj.phone.code} ${userObj.phone.number}`,
      icon: userObj.phone.icon,
      style: {
        bgColor: "#DDF5E6",
        iconColor: "#1CBE59",
      },
    },
    email: {
      title: "Email",
      text: userObj.email.email,
      icon: userObj.email.icon,
      style: {
        bgColor: "#ECE8FD",
        iconColor: "#8872F1",
      },
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

        <div className="flex  flex-col lg:flex-row justify-between relative lg:mt-20 mb-44 lg:mx-24">
          <div className="flex flex-col">
            {" "}
            <div className="text-xl lg:text-lg text-center lg:text-left">
              Let&apos;s Work Together!
            </div>
            <div className="flex flex-col">
              {Object.keys(contactDetails).map((key, index) => {
                const data = contactDetails[key as keyof typeof contactDetails];
                return (
                  <ContactDetails key={index} data={data}></ContactDetails>
                );
              })}
            </div>
          </div>

          {/* <div className="flex flex-1"> contact form</div> */}
          <ContactForm></ContactForm>
        </div>
      </div>
    </div>
  );
};

const ContactIcon = ({ icon, style }: { icon: any; style: GenericStyles }) => {
  return (
    <div
      className={cn(
        `w-10 h-10 lg:w-20 lg:h-20 rounded-full flex justify-center items-center m-4`
      )}
      style={{ backgroundColor: style.bgColor }}
    >
      <FontAwesomeIcon
        icon={icon}
        style={{
          color: style.iconColor,
        }}
        className={` max-w-6  lg:text-2xl lg:max-w-8`}
      />
    </div>
  );
};

const ContactDetails = ({
  data: { title, icon, text, style },
}: {
  data: { title: string; text: string; icon: any; style: GenericStyles };
}) => {
  return (
    <div className="flex flex-1 ">
      {" "}
      <div className="flex column flex-1">
        <ContactIcon icon={icon} style={style} />

        <div className="m-4">
          <h3 className="text-xl lg:text-3xl font-jost mb-2">{title}</h3>
          <span className="font-bold">{text}</span>
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
        <div className=" hidden lg:block text-xl text-gray-700 font-jost">
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

const ContactForm = () => {
  return (
    <div className="flex flex-1 w-full max-w-2xl justify-center align-middle">
      <DynamicForm></DynamicForm>
    </div>
  );
};

export default ContactUs;
