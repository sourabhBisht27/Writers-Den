import Input from "./Input";
import Button from "./Button";

const AuthForm = () => {
  return (
    <form>
      <Input
        type="text"
        required
      />
      <Input
        type="email"
        required
      />
      <Input
        type="password"
        required
      />
      <Input
        type="email"
        required
      />
    </form>
  );
};

export default AuthForm;
