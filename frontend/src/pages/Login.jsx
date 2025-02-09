import { FormCardWrapper } from '@/components/globals';
import CustomFormInput from '@/components/globals/CustomFormInput';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '@/features/user/userSlice';
import { useEffect } from 'react';

const LoginSchema = z.object({
  email: z.string().email({ message: 'Please enter your email' }),
  password: z.string().min(1, { message: 'Please enter your password' }),
});

function Login() {
  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { user } = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isSubmitting = form.formState.isSubmitting;

  function onSubmit(values) {
    dispatch(loginUser(values));
  }

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    }
  }, [user]);

  return (
    <FormCardWrapper title="Login">
      <Form {...form}>
        <form
          className="space-y-2 border-slate-600"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          {/* EMAIL */}
          <CustomFormInput name="email" type="email" control={form.control} />
          {/* PASSWORD */}
          <CustomFormInput
            name="password"
            type="password"
            control={form.control}
          />
          {/* SUBMIT BUTTON */}
          <div className="flex pt-4">
            <Button
              type="submit"
              className="mx-auto"
              size="lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : ' Submit'}
            </Button>
          </div>
        </form>
      </Form>
      <h3 className="capitalize text-center text-md mt-4">
        not registered yet?
        <Link to="/register">
          <Button variant={'link'} className="capitalize ml-0 pl-2 font-bold">
            register
          </Button>
        </Link>
      </h3>
    </FormCardWrapper>
  );
}

export default Login;
