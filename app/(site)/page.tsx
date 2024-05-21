import AuthForm from './components/AuthForm';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col-reverse lg:flex-row min-h-screen">
      <div className="w-full bg-gray-100 p-10">
        <div className="sm:mx-auto flex flex-col justify-center h-full sm:w-full sm:max-w-xl">
          <Image
            alt="logo"
            className="mx-auto w-auto"
            height={64}
            width={64}
            src="/images/chat.png"
          />

          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900 tracking-tight">
            Sign Up for <strong>Message And Mingle</strong> Today!
          </h2>
          <AuthForm />
        </div>
      </div>
    </main>
  );
}