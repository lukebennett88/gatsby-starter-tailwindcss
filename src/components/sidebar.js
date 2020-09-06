import React from 'react';

function Sidebar() {
  return (
    <div className="hidden lg:block">
      <aside className="sticky p-8 rounded-lg top-28 bg-gray-50">
        <div className="-my-4 divide-y-2 divide-gray-100">
          <dl className="divide-y-2 divide-gray-100">
            <div className="py-4">
              <dt className="sr-only">Employment type</dt>
              <dl className="flex items-start space-x-2 text-sm leading-5">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 text-gray-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15a24.98 24.98 0 01-8-1.308z" />
                </svg>
                <span className="text-gray-800">Full-time</span>
              </dl>
            </div>
            <div className="py-4">
              <dt className="sr-only">Location</dt>
              <dl className="flex items-start space-x-2 text-sm leading-5">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 text-gray-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <div className="text-gray-800">Remote</div>
                  <div className="text-gray-500">North America</div>
                </div>
              </dl>
            </div>
            <div className="py-4">
              <dt className="sr-only">Salary</dt>
              <dl className="flex items-start space-x-2 text-sm leading-5">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 text-gray-400"
                >
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                    clipRule="evenodd"
                  />
                </svg>
                <div style={{ fontVariantNumeric: 'tabular-nums' }}>
                  <div className="text-gray-800">$115,000 – $135,000 USD</div>
                  <div className="text-gray-500">$160,000 – $195,000 CAD</div>
                </div>
              </dl>
            </div>
            <div className="py-4">
              <dt className="sr-only">Closing date</dt>
              <dl className="flex items-start space-x-2 text-sm leading-5">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 text-gray-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-800">
                  <span aria-hidden="true">Closes on</span>{' '}
                  <time dateTime="2020-05-27T21:00:00.0">May 28, 2020</time>
                </span>
              </dl>
            </div>
          </dl>
          <div className="py-4">
            <a
              href="https://apply.workable.com/tailwind-ui/j/E129989EC6/apply/"
              className="inline-block rounded-none bg-gray-800 px-4 py-2.5 text-base leading-6 font-semibold text-white focus:border-gray-900 hover:bg-gray-700 active:bg-gray-900"
            >
              Apply for this job
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}

export { Sidebar };
