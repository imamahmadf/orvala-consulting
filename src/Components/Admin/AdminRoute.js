// import { Route, Redirect, useHistory } from "react-router-dom";
// import Loading from "../Loading";
// import { useSelector } from "react-redux";
// import { onAuthStateChanged, getAuth } from "firebase/auth";
// // import { authFirebase } from "../../Config/firebase";
// function AdminRoute(props) {
//   const { UserRoles } = useSelector((state) => state.user);
//   const history = useHistory();

//   if (UserRoles[0] === undefined) {
//     onAuthStateChanged(authFirebase, (user) => {
//       if (!user) {
//         history.push("/admin/login");
//       }
//     });
//     return <Loading />;
//   } else if (UserRoles.includes(2)) {
//     return <Route {...props} />;
//   } else {
//     return history.push("/");
//   }
// }

// export default AdminRoute;
