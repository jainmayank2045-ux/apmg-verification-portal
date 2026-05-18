'use client';

import { useState } from 'react';

export default function Home() {
  const certificates = {
    'APMG-INT-2026-021': {
      name: 'Mayank Jain',
      certificateNo: 'APMG-INT-2026-021',
      issueDate: '14/04/2026',
      validTill: '14/04/2029',
      status: 'Verified',
      course: 'Internship Completion Certificate',
      hours: '120 Hours',
      photo: '/intern-photo.jpg',
    },
  };
'APMG-INT-2026-019': {
  name: 'Mehal Jain',
  certificateNo: 'APMG-INT-2026-019',
  issueDate: '13/04/2026',
  validTill: '13/04/2029',
  status: 'Verified',
  course: 'Internship Completion Certificate',
  hours: '120 Hours',
  photo: '/rahul.jpg',
},
  const [certificateInput, setCertificateInput] = useState('');
  const [verifiedData, setVerifiedData] = useState(null);

  const handleVerify = () => {
    const result = certificates[certificateInput.trim()];

    if (result) {
      setVerifiedData(result);
    } else {
      setVerifiedData('invalid');
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <header className="bg-white shadow-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-sky-700">
              APMG AND ASSOCIATES
            </h1>
            <p className="text-slate-600">Certificate Verification Portal</p>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-r from-sky-700 to-blue-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-5">
            Verify Internship Certificate
          </h2>

          <div className="mt-10 bg-white rounded-3xl p-5 shadow-2xl flex flex-col md:flex-row gap-4">
            <input
              value={certificateInput}
              onChange={(e) => setCertificateInput(e.target.value)}
              type="text"
              placeholder="Enter Certificate Number"
              className="flex-1 px-5 py-4 rounded-2xl border border-slate-300 text-slate-800"
            />

            <button
              onClick={handleVerify}
              className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-2xl font-semibold"
            >
              Verify Certificate
            </button>
          </div>
        </div>
      </section>

      {verifiedData && verifiedData !== 'invalid' && (
        <section className="max-w-5xl mx-auto px-6 py-16">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="bg-green-600 text-white px-8 py-5">
              <h3 className="text-2xl font-bold">
                Certificate Successfully Verified
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
              <div className="flex flex-col items-center">
                <img
                  src={verifiedData.photo}
                  alt="Student"
                  className="w-52 h-52 object-cover rounded-3xl shadow-lg"
                />

                <h4 className="text-2xl font-bold mt-5">
                  {verifiedData.name}
                </h4>
              </div>

              <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-slate-50 rounded-2xl p-5">
                  <p className="text-sm text-slate-500">Certificate Number</p>
                  <h5 className="text-lg font-bold">
                    {verifiedData.certificateNo}
                  </h5>
                </div>

                <div className="bg-slate-50 rounded-2xl p-5">
                  <p className="text-sm text-slate-500">Issue Date</p>
                  <h5 className="text-lg font-bold">
                    {verifiedData.issueDate}
                  </h5>
                </div>

                <div className="bg-slate-50 rounded-2xl p-5">
                  <p className="text-sm text-slate-500">Valid Till</p>
                  <h5 className="text-lg font-bold">
                    {verifiedData.validTill}
                  </h5>
                </div>

                <div className="bg-slate-50 rounded-2xl p-5">
                  <p className="text-sm text-slate-500">Status</p>
                  <h5 className="text-lg font-bold text-green-600">
                    {verifiedData.status}
                  </h5>
                </div>

                <div className="bg-slate-50 rounded-2xl p-5 md:col-span-2">
                  <p className="text-sm text-slate-500">Certificate Type</p>
                  <h5 className="text-lg font-bold">
                    {verifiedData.course}
                  </h5>
                </div>

                <div className="bg-slate-50 rounded-2xl p-5 md:col-span-2">
                  <p className="text-sm text-slate-500">
                    Internship Duration
                  </p>
                  <h5 className="text-lg font-bold">
                    {verifiedData.hours}
                  </h5>
                </div>

                <a
                  href="/certificate-template.jpg"
                  download
                  className="bg-sky-600 hover:bg-sky-700 text-white text-center px-6 py-4 rounded-2xl font-semibold md:col-span-2"
                >
                  Download Certificate
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {verifiedData === 'invalid' && (
        <div className="max-w-3xl mx-auto px-6 py-10">
          <div className="bg-red-100 text-red-700 rounded-3xl p-8 text-center">
            <h3 className="text-3xl font-bold mb-2">
              Invalid Certificate
            </h3>

            <p>Certificate number not found.</p>
          </div>
        </div>
      )}
    </div>
  );