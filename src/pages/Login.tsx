import {  useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Zap, Mail, LockKeyhole, Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import GoogleIcon from "@/data/Icons";

import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [Loading, setLoading] = useState(false);
  const [showPassword, setShowPassowrd] = useState(false)
 
const handleSubmit = async (e:React.FormEvent) =>{
  e.preventDefault();
  setError("");
  setLoading(true);
  try {
    await login(email,password);
    navigate('/dashboard');

  } catch (err){
    setError( err instanceof Error ? err.message : 'Login Failed');
  } finally {
    setLoading(false);
  }

}

  return (
    <div className="flex items-center  justify-center h-screen w-full  flex-col gap-6 bg-slate-50 ">
      <div className=" flex flex-col rounded-md bg-white shadow-sm p-6">
        <div className="flex p-6 gap-3 justify-center  bg-white rounded-md">
          <div className=" flex items-center justify-center w-10 h-10 bg-[#6366F1] rounded-lg shadow-xs ">
            <Zap size={24} fill="#fff" stroke="#fff" />
          </div>

          <p
            className="font-semibold font-inter text-center leading-[38.4px] text-3xl
                       "
          >
            TaskFlow
          </p>
        </div>
        <div className="flex flex-col items-center gap-1 pb-10">
          <p className="font-semibold text-[20px] ">Welcome back</p>
          <p className="text-[#64748B] font-inter font-light leading-5  ">
            Log in to your workspace to continue.
          </p>
        </div>

        <div className="flex flex-col w-full gap-4 ">

          <FieldSet className="w-full" onSubmit={handleSubmit}>
            {error && (
              <div className="rounded-md bg-red-50 border border-red-200 px-3 py-2 text-sm text-red-600">
                {error}
              </div>
            )}
            <FieldGroup>
              <Field>
                <FieldLabel>Email address</FieldLabel>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <Mail stroke="#94A3B8" size={16} />
                  </div>
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="off"
                    placeholder="name@company.com"
                    className="pl-8 h-10 border-[#94A3B8] focus:border-blue-500 focus:ring-blue-500/10"
                  />
                </div>
              </Field>

              <Field>
                <FieldLabel>Password</FieldLabel>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <LockKeyhole stroke="#94A3B8" size={16} />
                  </div>
                  <Input
                    type={showPassword ? 'text':'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="off"
                    className="pl-8 h-10 border-[#94A3B8] flex items-center focus:border-blue-500 focus:ring-blue-500/10"
                  />
                  <Button  
                  type='button'
                  onClick={()=>setShowPassowrd(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                    
                    {showPassword? <Eye stroke="#94A3B8" size={16} />:<EyeOff stroke="#94A3B8" size={16} /> }
                  </Button>
                </div>
              </Field>
            </FieldGroup>
          </FieldSet>

          <Button
            className="bg-[#6366F1] w-full h-10 text-white py-3 font-semibold leading-6 "
            disabled={Loading}

          >
            
            {Loading ? 'Signing In':'Sign In'}
          </Button>
        </div>
        <div className="flex py-10 items-center gap-1 ">
          <div className=" border-b w-25 text-[#94A3B8]" />
          <p className="font-inter leading-3 font-normal  text-[#94A3B8]">
            or continue with{" "}
          </p>
          <div className=" border-b w-25 text-[#94A3B8]" />
        </div>

        <Button className="flex px-11 w-full h-10 py-2.5 border border-[#E2E8F0] rounded-lg cursor-pointer shadow-xs ">
          <GoogleIcon />
          <p className="font-inter font-normal text-[14px] ">Google</p>
        </Button>
      </div>
      <div>
        <p className="font-inter text-[14px] leading-4 text-[#64748B]">
          Don't have an account?{" "}
          <span className="text-[#6366F1] cursor-pointer">Sign up</span>
        </p>
      </div>
      <div className="flex gap-6 pt-10">
        <p className="font-inter font-medium text-[12px] leading-3 text-[#94A3B8] ">
          Privacy Policy{" "}
        </p>
        <p className="font-inter font-medium text-[12px] leading-3 text-[#94A3B8] ">
          Terms of Service{" "}
        </p>
        <p className="font-inter font-medium text-[12px] leading-3 text-[#94A3B8] ">
          Security
        </p>
        <p className="font-inter font-medium text-[12px] leading-3 text-[#94A3B8] ">
          &copy; 2026 TaskFlow Inc.{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
