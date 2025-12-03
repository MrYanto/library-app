import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { Form, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  registerSchema,
  RegisterSchema,
} from '../../../lib/validation/auth.validation';
import { useState } from 'react';
import Icon from '/icons/icon.svg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const RegisterForm = () => {
  const { register: registerMutation } = useAuth();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });
  const onSubmit = (data: RegisterSchema) => {
    registerMutation.mutate(data);
    router.push('/login');
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className='flex min-h-screen items-center justify-center bg-neutral-50'>
      <div className='flex h-fit w-100 flex-col gap-5'>
        {/* Logo and Header */}
        <div className='flex flex-col gap-5'>
          <div className='flex items-center gap-2'>
            <Image src={Icon} height={33} width={33} alt='icon' />
            <h1 className='text-xl font-semibold text-neutral-900'>Booky</h1>
          </div>

          <div className='gap2 flex flex-col'>
            <h2 className='mb-2 text-2xl font-bold text-neutral-900'>
              Register
            </h2>
            <p className='text-sm text-neutral-600'>
              Create your account to start borrowing books.
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
          {/* Name Field */}
          <div>
            <label
              htmlFor='name'
              className='mb-[2px] block text-sm font-medium text-neutral-900'
            >
              Name
            </label>
            <input
              type='text'
              id='name'
              className='focus:ring-primary w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm transition-all focus:border-transparent focus:ring-2 focus:outline-none'
              placeholder=''
              required
              {...register('name')}
            />
            {errors.name && (
              <p className='mt-1 text-sm text-red-600'>{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor='email'
              className='mb-[2px] block text-sm font-medium text-neutral-900'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              className='focus:ring-primary w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm transition-all focus:border-transparent focus:ring-2 focus:outline-none'
              placeholder=''
              required
              {...register('email')}
            />
            {errors.email && (
              <p className='mt-1 text-sm text-red-600'>
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <label
              htmlFor='phone'
              className='mb-[2px] block text-sm font-medium text-neutral-900'
            >
              Nomor Handphone
            </label>
            <input
              type='tel'
              id='phone'
              {...register('phoneNumber')}
              className='focus:ring-primary w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm transition-all focus:border-transparent focus:ring-2 focus:outline-none'
              placeholder=''
            />
            {errors.phoneNumber && (
              <p className='mt-1 text-sm text-red-600'>
                {errors.phoneNumber.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor='password'
              className='mb-[2px] block text-sm font-medium text-neutral-900'
            >
              Password
            </label>
            <div className='relative'>
              <input
                type={showPassword ? 'text' : 'password'}
                id='password'
                className='focus:ring-primary w-full rounded-lg border border-neutral-300 px-4 py-2.5 pr-12 text-sm transition-all focus:border-transparent focus:ring-2 focus:outline-none'
                placeholder=''
                required
                {...register('password')}
              />
              <button
                type='button'
                onClick={() => setShowPassword(!showPassword)}
                className='absolute top-1/2 right-4 -translate-y-1/2 text-neutral-500 transition-colors hover:text-neutral-700'
              >
                <svg
                  className='h-5 w-5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  {showPassword ? (
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                    />
                  ) : (
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21'
                    />
                  )}
                </svg>
              </button>
              {errors.password && (
                <p className='mt-1 text-sm text-red-600'>
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            className='bg-primary focus:bg-primary/80 w-full rounded-lg px-4 py-3 text-sm font-medium text-white shadow-sm transition-all focus:ring-2 focus:ring-offset-2 focus:outline-none'
          >
            Submit
          </button>

          <p className='text-center text-sm text-neutral-600'>
            Already have an account?{' '}
            <a
              href='#'
              className='text-primary hover:text-primary/80 font-medium transition-colors'
            >
              Log In
            </a>
          </p>
        </form>

        {/* Login Link */}
      </div>
    </section>
  );
};

export default RegisterForm;
