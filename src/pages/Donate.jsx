import { useState } from 'react';
import { FiCheckCircle, FiCreditCard, FiDollarSign, FiShield, FiSmartphone } from 'react-icons/fi';
import SectionHeader from '../components/SectionHeader';

const amounts = [10, 25, 50, 100];
const impactNotes = [
  'Fund school and health programs',
  'Expand community-led livelihoods',
  'Help us respond quickly to urgent needs',
];
const paymentMethods = [
  { name: 'Visa / Mastercard', icon: FiCreditCard },
  { name: 'Mobile Money', icon: FiSmartphone },
  { name: 'PayPal', icon: FiDollarSign },
];

export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState(25);
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState(paymentMethods[0].name);
  const [thanked, setThanked] = useState(false);

  const giftAmount = customAmount || selectedAmount;

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Donate"
        title="Your generosity creates lasting change"
        description="Every donation helps fund programs that deliver direct support to vulnerable communities."
      />
      <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <section className="surface-card p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
              <FiShield size={22} />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-slate-950">Give securely</h3>
              <p className="mt-2 text-slate-600">Choose an amount to preview your gift. Payment wiring can connect here when the provider is ready.</p>
            </div>
          </div>
          <form className="mt-8" onSubmit={(event) => { event.preventDefault(); setThanked(true); }}>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4" role="group" aria-label="Donation amount">
            {amounts.map((amount) => {
              const isSelected = selectedAmount === amount && !customAmount;
              return (
                <button
                  key={amount}
                  type="button"
                  onClick={() => { setSelectedAmount(amount); setCustomAmount(''); }}
                  className={`rounded-lg border px-4 py-3 font-semibold transition ${isSelected ? 'border-emerald-600 bg-emerald-600 text-white' : 'border-slate-300 text-slate-700 hover:border-emerald-500 hover:text-emerald-700'}`}
                >
                  ${amount}
                </button>
              );
            })}
          </div>
          <label className="mt-5 block text-sm font-semibold text-slate-700" htmlFor="customAmount">Custom amount</label>
          <input
            id="customAmount"
            type="number"
            min="1"
            value={customAmount}
            onChange={(event) => setCustomAmount(event.target.value)}
            className="mt-2 w-full rounded-lg border border-slate-300 px-4 py-3 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
            placeholder="Enter another amount"
          />
          <p className="mt-6 text-sm font-semibold text-slate-700">Payment method</p>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            {paymentMethods.map((method) => {
              const Icon = method.icon;
              const isSelected = paymentMethod === method.name;
              return (
                <button
                  key={method.name}
                  type="button"
                  onClick={() => setPaymentMethod(method.name)}
                  className={`flex items-center justify-center gap-2 rounded-lg border px-3 py-3 text-sm font-semibold transition ${isSelected ? 'border-emerald-600 bg-emerald-50 text-emerald-800' : 'border-slate-300 text-slate-700 hover:border-emerald-500'}`}
                >
                  <Icon /> {method.name}
                </button>
              );
            })}
          </div>
          <div className="mt-6 rounded-lg bg-slate-50 p-5">
            <p className="text-sm font-medium text-slate-500">Selected gift</p>
            <p className="mt-1 text-3xl font-semibold text-slate-950">${giftAmount}</p>
            <p className="mt-1 text-sm text-slate-500">{paymentMethod}</p>
          </div>
          <button type="submit" className="mt-6 w-full rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700">Donate</button>
          {thanked && (
            <div className="mt-5 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">
              <p className="font-semibold">Thank you!</p>
              <p className="mt-1 text-sm">A receipt and email confirmation preview is ready for the payment integration step.</p>
            </div>
          )}
          </form>
        </section>
        <section className="soft-panel p-8">
          <h3 className="text-2xl font-semibold text-slate-950">Why donate?</h3>
          <ul className="mt-6 space-y-4 text-slate-700">
            {impactNotes.map((note) => (
              <li key={note} className="flex gap-3">
                <FiCheckCircle className="mt-1 shrink-0 text-emerald-700" />
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
