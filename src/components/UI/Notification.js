import classes from "./Notification.module.css";

const Notification = (props) => {
  let specialClasses = "";

  if (props.status === "error") {
    specialClasses = classes.error;
  }
  if (props.status === "success") {
    specialClasses = classes.success;
  }

  const cssClasses = `${classes.notification} ${specialClasses}`;

  return (
    <section className={cssClasses}>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </section>
  );
};

export default Notification;

// const Notification = (props) => {
//   let specialClasses = "";

//   const { title, status, message } = props.notification;

//   if (status === "error") {
//     specialClasses = classes.error;
//   }
//   if (status === "success") {
//     specialClasses = classes.success;
//   }

//   const cssClasses = `${classes.notification} ${specialClasses}`;

//   return (
//     <section className={cssClasses}>
//       <h2>{title}</h2>
//       <p>{message}</p>
//     </section>
//   );
// };
