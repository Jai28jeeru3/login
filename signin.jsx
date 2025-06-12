import React, { useState } from 'react';
import { Eye, EyeOff, Search, MapPin, Globe, Building, Users } from 'lucide-react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import "../App.css";
import TwoStepSignup from './twostep.jsx';
import FOREST from '../imge/forest.jpg';

const countryData = [
	{
		country: 'India',
		code: 'IN',
		format: '######',
		description: '6-digit postal code (PIN)',
		flag: '🇮🇳',
		areas: [
			{ pincode: '110001', area: 'Connaught Place', city: 'New Delhi', state: 'Delhi' },
			{ pincode: '400001', area: 'Fort', city: 'Mumbai', state: 'Maharashtra' },
			{ pincode: '560001', area: 'Chickpet', city: 'Bangalore', state: 'Karnataka' },
			{ pincode: '600001', area: 'Parrys', city: 'Chennai', state: 'Tamil Nadu' },
			{ pincode: '700001', area: 'BBD Bagh', city: 'Kolkata', state: 'West Bengal' },
			{ pincode: '302001', area: 'Pink City', city: 'Jaipur', state: 'Rajasthan' },
			{ pincode: '500001', area: 'Abids', city: 'Hyderabad', state: 'Telangana' },
			{ pincode: '411001', area: 'Pune Cantonment', city: 'Pune', state: 'Maharashtra' }
		]
	},
	{
		country: 'United States',
		code: 'US',
		format: '##### or #####-####',
		description: '5-digit ZIP code, optionally with 4-digit extension',
		flag: '🇺🇸',
		areas: [
			{ pincode: '10001', area: 'Chelsea', city: 'New York', state: 'NY' },
			{ pincode: '90001', area: 'South Los Angeles', city: 'Los Angeles', state: 'CA' },
			{ pincode: '60601', area: 'The Loop', city: 'Chicago', state: 'IL' },
			{ pincode: '94105', area: 'South Beach', city: 'San Francisco', state: 'CA' },
			{ pincode: '77001', area: 'Houston', city: 'Houston', state: 'TX' }
		]
	},
	{
		country: 'United Kingdom',
		code: 'GB',
		format: 'AA# #AA or A# #AA',
		description: 'Alphanumeric postcode',
		flag: '🇬🇧',
		areas: [
			{ pincode: 'SW1A 1AA', area: 'Buckingham Palace', city: 'London', state: 'England' },
			{ pincode: 'EH1 1YZ', area: 'Old Town', city: 'Edinburgh', state: 'Scotland' },
			{ pincode: 'B1 1AA', area: 'City Centre', city: 'Birmingham', state: 'England' }
		]
	},
	{
		country: 'Canada',
		code: 'CA',
		format: 'A#A #A#',
		description: 'Alphanumeric postal code',
		flag: '🇨🇦',
		areas: [
			{ pincode: 'M5H 2N2', area: 'Financial District', city: 'Toronto', state: 'Ontario' },
			{ pincode: 'H2Y 1C6', area: 'Old Montreal', city: 'Montreal', state: 'Quebec' },
			{ pincode: 'V6B 3K9', area: 'Downtown', city: 'Vancouver', state: 'British Columbia' }
		]
	},
	{
		country: 'Australia',
		code: 'AU',
		format: '####',
		description: '4-digit postcode',
		flag: '🇦🇺',
		areas: [
			{ pincode: '2000', area: 'Sydney CBD', city: 'Sydney', state: 'NSW' },
			{ pincode: '3000', area: 'Melbourne CBD', city: 'Melbourne', state: 'VIC' },
			{ pincode: '4000', area: 'Brisbane CBD', city: 'Brisbane', state: 'QLD' }
		]
	},
	{
		country: 'Germany',
		code: 'DE',
		format: '#####',
		description: '5-digit PLZ',
		flag: '🇩🇪',
		areas: [
			{ pincode: '10115', area: 'Mitte', city: 'Berlin', state: 'Berlin' },
			{ pincode: '80331', area: 'Altstadt-Lehel', city: 'Munich', state: 'Bavaria' },
			{ pincode: '50667', area: 'Innenstadt', city: 'Cologne', state: 'North Rhine-Westphalia' }
		]
	},
	{
		country: 'France',
		code: 'FR',
		format: '#####',
		description: '5-digit code postal',
		flag: '🇫🇷',
		areas: [
			{ pincode: '75001', area: 'Louvre', city: 'Paris', state: 'Île-de-France' },
			{ pincode: '69001', area: '1er Arrondissement', city: 'Lyon', state: 'Auvergne-Rhône-Alpes' },
			{ pincode: '13001', area: '1er Arrondissement', city: 'Marseille', state: 'Provence-Alpes-Côte d’Azur' }
		]
	},
	{
		country: 'Japan',
		code: 'JP',
		format: '###-####',
		description: '7-digit postal code with hyphen',
		flag: '🇯🇵',
		areas: [
			{ pincode: '100-0001', area: 'Chiyoda', city: 'Tokyo', state: 'Tokyo' },
			{ pincode: '530-0001', area: 'Kita', city: 'Osaka', state: 'Osaka' },
			{ pincode: '060-0001', area: 'Chuo', city: 'Sapporo', state: 'Hokkaido' }
		]
	},
	{
		country: 'Brazil',
		code: 'BR',
		format: '#####-###',
		description: '8-digit CEP with hyphen',
		flag: '🇧🇷',
		areas: [
			{ pincode: '01001-000', area: 'Sé', city: 'São Paulo', state: 'SP' },
			{ pincode: '20010-000', area: 'Centro', city: 'Rio de Janeiro', state: 'RJ' },
			{ pincode: '70040-010', area: 'Asa Sul', city: 'Brasília', state: 'DF' }
		]
	}
];

export default function Sign() {
	const [form, setForm] = useState({
		firstname: '',
		lastname: '',
		email: '',
		password: '',
		confirmPassword: '',
		pincode: '',
		gstin: '',
		address1: '',
		address2: '',
	});
	const [phone, setPhone] = useState('');
	const [searchTerm, setSearchTerm] = useState('');
	const [showPincodeDropdown, setShowPincodeDropdown] = useState(false);
	const [selectedCountryDropdown, setSelectedCountryDropdown] = useState(null);
	const [selectedAreaDropdown, setSelectedAreaDropdown] = useState(null);
	const [errors, setErrors] = useState({});
	const [showVerification, setShowVerification] = useState(false);
	const [pendingForm, setPendingForm] = useState(null);
	const [verificationEmail, setVerificationEmail] = useState('');

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
		if (errors[name]) {
			setErrors(prev => ({ ...prev, [name]: '' }));
		}
	};

	const validateForm = () => {
		const newErrors = {};
		if (!form.firstname.trim()) newErrors.firstname = 'First name is required';
		if (!form.lastname.trim()) newErrors.lastname = 'Last name is required';
		if (!form.email.trim()) newErrors.email = 'Email is required';
		else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Please enter a valid email';
		if (!form.password) newErrors.password = 'Password is required';
		else if (form.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
		if (form.password !== form.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
		if (!form.address1.trim() && !form.address2.trim()) newErrors.address1 = 'At least one address is required';
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!validateForm()) return;
		setPendingForm({ ...form, phone });
		setVerificationEmail(form.email);
		setShowVerification(true);
	};

	const handleVerificationSuccess = () => {
		setShowVerification(false);
		alert(
			`Sign In Successful!\nFirst Name: ${pendingForm.firstname}\nLast Name: ${pendingForm.lastname}\nEmail: ${pendingForm.email}\nPhone: ${pendingForm.phone}\nPincode: ${pendingForm.pincode}`
		);
	};

	const filteredCountries = countryData.filter(country =>
		country.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
		country.code.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<>
			{showVerification ? (
				<div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
					<div style={{ padding: 32, minWidth: 340, background: '#fff', borderRadius: 12 }}>
						<h2 style={{ textAlign: 'center', marginBottom: 24 }}>Two-Step Verification</h2>
						<TwoStepSignup email={verificationEmail} isForgotPassword={true} onSuccess={handleVerificationSuccess} />
					</div>
				</div>
			) : (
				<form onSubmit={handleSubmit} style={{
					padding: 0,
					minWidth: 0,
					background: 'none',
					borderRadius: 0,
					boxShadow: 'none',
					border: 'none',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'stretch',
					width: 400,
					marginLeft: '25%',
					marginTop: 40 // move form a bit down
				}}>
					<h2 style={{ color: '#fff', textAlign: 'center', marginBottom: 40, marginTop: 20, fontSize: 40, fontWeight: 700 }}>Sign Up</h2>
					<div style={{ display: 'flex', gap: 20, width: '100%', marginBottom: 20 }}>
						<div style={{ flex: 1 }}>
							<label htmlFor="firstname" style={{ color: '#fff' }}>First Name</label>
							<input
								id="firstname"
								name="firstname"
								type="text"
								value={form.firstname}
								onChange={handleChange}
								placeholder="Enter your first name"
								required
								style={{ borderRadius: 18, height: 48, fontSize: 18, paddingLeft: 16 }}
							/>
							{errors.firstname && <span style={{ color: '#ef4444', fontSize: 14 }}>{errors.firstname}</span>}
						</div>
						<div style={{ flex: 1 }}>
							<label htmlFor="lastname" style={{ color: '#fff' }}>Last Name</label>
							<input
								id="lastname"
								name="lastname"
								type="text"
								value={form.lastname}
								onChange={handleChange}
								placeholder="Enter your last name"
								required
								style={{ borderRadius: 18, height: 48, fontSize: 18, paddingLeft: 16 }}
							/>
							{errors.lastname && <span style={{ color: '#ef4444', fontSize: 14 }}>{errors.lastname}</span>}
						</div>
					</div>
					<div style={{ width: '100%', marginBottom: 20 }}>
						<label htmlFor="email" style={{ display: 'block', marginBottom: 6, color: '#fff' }}>Email</label>
						<input
							id="email"
							name="email"
							type="email"
							value={form.email}
							onChange={handleChange}
							placeholder="Enter your email"
							required
							style={{ borderRadius: 18, height: 48, fontSize: 18, paddingLeft: 16 }}
						/>
						{errors.email && <span style={{ color: '#ef4444', fontSize: 14 }}>{errors.email}</span>}
					</div>
					<div style={{ display: 'flex', gap: 20, width: '100%', marginBottom: 20 }}>
						<div style={{ flex: 1 }}>
							<label htmlFor="password" style={{ display: 'block', marginBottom: 6, color: '#fff' }}>Password</label>
							<input
								id="password"
								name="password"
								type="password"
								value={form.password}
								onChange={handleChange}
								placeholder="Create a password"
								required
								style={{ borderRadius: 18, height: 48, fontSize: 18, paddingLeft: 16 }}
							/>
							{errors.password && <span style={{ color: '#ef4444', fontSize: 14 }}>{errors.password}</span>}
						</div>
						<div style={{ flex: 1 }}>
							<label htmlFor="confirmPassword" style={{ color: '#fff' }}>Confirm Password</label>
							<input
								id="confirmPassword"
								name="confirmPassword"
								type="password"
								value={form.confirmPassword}
								onChange={handleChange}
								placeholder="Confirm your password"
								required
								style={{ borderRadius: 18, height: 48, fontSize: 18, paddingLeft: 16 }}
							/>
							{errors.confirmPassword && <span style={{ color: '#ef4444', fontSize: 14 }}>{errors.confirmPassword}</span>}
						</div>
					</div>
					<div style={{ width: '100%', marginBottom: 20 }}>
						<label htmlFor="phone" style={{ display: 'block', marginBottom: 6, color: '#fff' }}>Phone</label>
						<PhoneInput
							country={'in'}
							value={phone}
							onChange={setPhone}
							enableSearch={true}
							inputStyle={{ width: "100%", height: 48, fontSize: 18, borderRadius: 18, border: "1px solid #ccc", paddingLeft: 16 }}
							buttonStyle={{ marginRight: "10px", height: 48 }}
							containerStyle={{ width: "100%" }}
						/>
					</div>
					<div style={{ width: '100%', position: 'relative', marginBottom: 20 }}>
						<label htmlFor="pincode" style={{ color: '#fff' }}>Pincode</label>
						<div style={{ display: 'flex', alignItems: 'center' }}>
							<input
								id="pincode"
								name="pincode"
								type="text"
								value={form.pincode}
								onChange={handleChange}
								placeholder="Select or type postal code"
								style={{ width: '100%', padding: '14px 16px', borderRadius: 18, border: '1px solid #ccc', background: '#f9f9f9', cursor: 'text', fontSize: 18 }}
							/>
							<button
								type="button"
								aria-label="Open pincode explorer"
								style={{ marginLeft: 8, background: 'none', border: 'none', cursor: 'pointer', fontSize: 20 }}
								onClick={() => setShowPincodeDropdown(v => !v)}
							>
								▼
							</button>
						</div>
						{showPincodeDropdown && (
							<div style={{ position: 'absolute', top: 48, left: 0, width: '100%', background: '#fff', border: '1px solid #ccc', borderRadius: 8, zIndex: 100, maxHeight: 400, overflowY: 'auto', boxShadow: '0 4px 24px #8b5cf655', padding: 16 }}>
								{!selectedCountryDropdown ? (
									<>
										<input
											type="text"
											placeholder="Search countries..."
											value={searchTerm}
											onChange={e => setSearchTerm(e.target.value)}
											style={{ width: '100%', marginBottom: 12, padding: 8, borderRadius: 4, border: '1px solid #eee' }}
										/>
										<div style={{ maxHeight: 200, overflowY: 'auto' }}>
											{filteredCountries.map((country, idx) => (
												<div
													key={country.code}
													style={{ padding: 8, cursor: 'pointer', display: 'flex', alignItems: 'center', borderBottom: '1px solid #f0f0f0' }}
													onClick={() => { setSelectedCountryDropdown(country); setSearchTerm(''); }}
												>
													<span style={{ fontSize: 22, marginRight: 10 }}>{country.flag}</span>
													<span style={{ fontWeight: 600 }}>{country.country}</span>
													<span style={{ marginLeft: 8, color: '#888', fontSize: 13 }}>{country.code}</span>
												</div>
											))}
										</div>
									</>
								) : !selectedAreaDropdown ? (
									<>
										<button type="button" onClick={() => setSelectedCountryDropdown(null)} style={{ marginBottom: 10, background: 'none', border: 'none', color: '#6366f1', cursor: 'pointer' }}>← Back to countries</button>
										<div style={{ fontWeight: 600, marginBottom: 8 }}>{selectedCountryDropdown.flag} {selectedCountryDropdown.country}</div>
										<div style={{ maxHeight: 200, overflowY: 'auto' }}>
											{selectedCountryDropdown.areas.map((area, idx) => (
												<div
													key={area.pincode}
													style={{ padding: 8, cursor: 'pointer', borderBottom: '1px solid #f0f0f0' }}
													onClick={() => { setSelectedAreaDropdown(area); setForm(f => ({ ...f, pincode: area.pincode })); setShowPincodeDropdown(false); setSelectedCountryDropdown(null); setSelectedAreaDropdown(null); }}
												>
													<div style={{ fontWeight: 500 }}>{area.pincode} - {area.area}</div>
													<div style={{ fontSize: 13, color: '#888' }}>{area.city}, {area.state}</div>
												</div>
											))}
										</div>
									</>
								) : null}
							</div>
						)}
					</div>
					<div style={{ display: 'flex', gap: 20, width: '100%', marginBottom: 20 }}>
						<div style={{ flex: 1 }}>
							<label htmlFor="address1" style={{ color: '#fff' }}>Address 1</label>
							<input
								id="address1"
								name="address1"
								type="text"
								value={form.address1}
								onChange={handleChange}
								placeholder="Enter address line 1"
								style={{ borderRadius: 18, height: 48, fontSize: 18, paddingLeft: 16, width: '100%' }}
								maxLength={100}
							/>
						</div>
						<div style={{ flex: 1 }}>
							<label htmlFor="address2" style={{ color: '#fff' }}>Address 2</label>
							<input
								id="address2"
								name="address2"
								type="text"
								value={form.address2}
								onChange={handleChange}
								placeholder="Enter address line 2 (optional)"
								style={{ borderRadius: 18, height: 48, fontSize: 18, paddingLeft: 16, width: '100%' }}
								maxLength={100}
							/>
							{errors.address1 && <span style={{ color: '#ef4444', fontSize: 14 }}>{errors.address1}</span>}
						</div>
					</div>
					{(form.address1 || form.address2) && (
						<div style={{ marginBottom: 20, background: 'rgba(255,255,255,0.1)', borderRadius: 12, padding: 12, color: '#fff', fontSize: 17, wordBreak: 'break-word' }}>
							<strong>Full Address:</strong> {form.address1}{form.address1 && form.address2 ? ', ' : ''}{form.address2}
						</div>
					)}
					<div style={{ width: '100%', marginBottom: 20 }}>
						<label htmlFor="gstin" style={{ color: '#fff' }}>GSTIN (optional)</label>
						<br />
						<input
							id="gstin"
							name="gstin"
							type="text"
							value={form.gstin || ''}
							onChange={handleChange}
							placeholder="Enter your GSTIN (if any)"
							style={{ borderRadius: 18, height: 48, fontSize: 18, paddingLeft: 16 }}
						/>
					</div>
					<button type="submit" style={{ borderRadius: 18, padding: '12px 0', background: '#6366f1', color: '#fff', fontWeight: 600, border: 'none', fontSize: 16, backgroundColor: '#4C48B0', width: '100%' }}>Sign In</button>
				</form>
			)}
		</>
	);
}