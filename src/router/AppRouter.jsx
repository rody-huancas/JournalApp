import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "auth/routes/AuthRoutes";
import { JournalRoutes } from "journal/routes/JournalRoutes";
import { CheckingAuth } from "ui";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "firebaseConfig/config";
import { login, logout } from "store/auth";

export const AppRouter = () => {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout());

      const { uid, email, displayName, photoURL } = user;
      dispatch(login({ uid, email, displayName, photoURL }));
    });

    return () => unsubscribe();
  }, []);

  if (status === "checking") return <CheckingAuth />;

  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<JournalRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}

      <Route path="/*" element={<Navigate to="/auth/login" />} />

      {/*LOGIN Y REGISTRO   */}
      {/* <Route path="/auth/*" element={<AuthRoutes />} /> */}
      {/* JOURNAL APP */}
      {/* <Route path="/*" element={<JournalRoutes />} /> */}
    </Routes>
  );
};
