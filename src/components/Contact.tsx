import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChangeEvent, FormEvent, useState } from 'react';
import { twJoin } from 'tailwind-merge';

import connectImg from '../assets/images/connect1.svg';

const Contact = () => {
  const [inputs, setInputs] = useState({ name: '', email: '', message: '' });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handelSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      <div className="flex items-center">
        <img
          src={connectImg}
          alt=""
          className="mx-auto h-64 w-64 sm:h-96 sm:w-96"
        />
      </div>
      <div className="rounded-xl bg-black/20 sm:max-w-lg">
        <form className="flex flex-col gap-4 px-4 py-8" onSubmit={handelSubmit}>
          <div className="input__group">
            <input
              type="text"
              id="name"
              value={inputs.name}
              name="name"
              onChange={handleChange}
            />
            <label
              htmlFor="name"
              className={twJoin(inputs.name.length > 0 && 'active')}
            >
              Enter your Name
            </label>
          </div>
          <div className="input__group">
            <input
              type="email"
              name="email"
              id="email"
              value={inputs.email}
              onChange={handleChange}
            />
            <label
              htmlFor="email"
              className={twJoin(inputs.email.length > 0 && 'active')}
            >
              Enter Your Email
            </label>
          </div>
          <div className="input__group">
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={5}
              value={inputs.message}
              onChange={handleChange}
            />
            <label
              htmlFor="message"
              className={twJoin(inputs.message.length > 0 && 'active')}
            >
              Message
            </label>
          </div>
          <button className="flex items-center justify-center gap-4 rounded-md bg-blue-600 py-2 text-white hover:bg-blue-500 dark:bg-blue-400 dark:hover:bg-blue-300">
            <FontAwesomeIcon icon={faPaperPlane} />
            <span>Message</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
