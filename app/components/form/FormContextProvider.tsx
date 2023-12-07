import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface FormContextType {
  name: string;
  email: string;
  tel: string;
  isNameValid: boolean;
  isEmailValid: boolean;
  isTelValid: boolean;
  setName: (value: string) => void;
  setEmail: (value: string) => void;
  setTel: (value: string) => void;
  setIsNameValid: (isValid: boolean) => void;
  setIsEmailValid: (isValid: boolean) => void;
  setIsTelValid: (isValid: boolean) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const useFormContext = (): FormContextType => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [isNameValid, setIsNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isTelValid, setIsTelValid] = useState(false);

  useEffect(() => {
    const storedValues = localStorage.getItem("formValues");
    if (storedValues) {
      const { name, email, tel } = JSON.parse(storedValues);
      setName(name);
      setEmail(email);
      setTel(tel);
    }
  }, []);

  const value = {
    name,
    email,
    tel,
    isNameValid,
    isEmailValid,
    isTelValid,
    setName,
    setEmail,
    setTel,
    setIsNameValid,
    setIsEmailValid,
    setIsTelValid,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
