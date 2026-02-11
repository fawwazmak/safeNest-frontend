import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get("token");

  const [status, setStatus] = useState("loading");

  useEffect(() => {
    if (!token) {
      setStatus("error");
      return;
    }

    fetch(`/auth/verify-email?token=${token}`)
      .then(res => res.json())
      .then(() => {
        setStatus("success");
        setTimeout(() => navigate("/login"), 3000);
      })
      .catch(() => setStatus("error"));
  }, [token, navigate]);

  if (status === "loading") return <p>Verifying email...</p>;
  if (status === "success") return <p>Email verified successfully! Redirecting...</p>;
  return <p>Invalid or expired verification link.</p>;
};

export default VerifyEmail;
