import { FormCardWrapper } from '@/components/globals';
import CustomFormInput from '@/components/globals/CustomFormInput';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import customFetch from '@/utils/axios';
import { toast } from 'react-toastify';

const RegisterSchema = z.object({
  name: z.string().min(1, { message: 'Please enter your name' }),
  email: z.string().email({ message: 'Please enter valid email' }),
  password: z
    .string()
    .min(8, { message: 'Password must be atleast 8 characters' }),
});

function Register() {
  const form = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const isSubmitting = form.formState.isSubmitting;
  const navigate = useNavigate();

  async function onSubmit(values) {
    try {
      await customFetch.post(`/auth/register`, values);
      toast.success(`Registration Successful! Please login`);
      navigate('/');
    } catch (error) {
      const errorMsg = error?.response?.data?.msg || `Oops there was an error`;
      toast.error(errorMsg);
    }
  }

  return (
    <FormCardWrapper title="Register">
      <Form {...form}>
        <form
          className="space-y-2 border-slate-600"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          {/* NAME */}
          <CustomFormInput name="name" type="text" control={form.control} />
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
      <h3 className="capitalize text-center text-md mt-2">
        already registered?
        <Link to="/">
          <Button variant={'link'} className="capitalize ml-0 pl-2 font-bold">
            login
          </Button>
        </Link>
      </h3>
    </FormCardWrapper>
  );
}

export default Register;
