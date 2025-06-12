import React, { useState, useEffect } from 'react';
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

const PincodeGenerator = ({ onSelect }) => {
	const [selectedCountry, setSelectedCountry] = useState('');
	const [selectedState, setSelectedState] = useState('');
	const [generatedPincode, setGeneratedPincode] = useState('');
	const [searchTerm, setSearchTerm] = useState('');

	const filteredCountries = countryData.filter(country =>
		country.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
		country.code.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const generatePincode = () => {
		if (!selectedCountry || !selectedState) return;
		const country = countryData.find(c => c.code === selectedCountry);
		if (!country) return;
		const area = country.areas.find(a => a.state === selectedState);
		if (area) {
			setGeneratedPincode(area.pincode);
		} else {
			setGeneratedPincode('');
		}
	};

	useEffect(() => {
		if (selectedCountry && selectedState) {
			generatePincode();
		}
	}, [selectedCountry, selectedState]);

	useEffect(() => {
		if (generatedPincode && onSelect) {
			onSelect(generatedPincode);
		}
	}, [generatedPincode, onSelect]);

	return (
		<div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 16 }}>
			<div style={{ display: 'flex', gap: 16 }}>
				<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
					<label htmlFor="country" style={{ fontWeight: 500, fontSize: 15 }}>Country</label>
					<input
						id="country"
						type="text"
						value={selectedCountry}
						onChange={(e) => setSelectedCountry(e.target.value)}
						placeholder="Enter country code"
						style={{ borderRadius: 8, height: 36, fontSize: 15, paddingLeft: 12, border: '1px solid #ccc' }}
					/>
				</div>
				<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
					<label htmlFor="state" style={{ fontWeight: 500, fontSize: 15 }}>State</label>
					<input
						id="state"
						type="text"
						value={selectedState}
						onChange={(e) => setSelectedState(e.target.value)}
						placeholder="Enter state"
						style={{ borderRadius: 8, height: 36, fontSize: 15, paddingLeft: 12, border: '1px solid #ccc' }}
					/>
				</div>
			</div>
			<div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
				<label htmlFor="pincode" style={{ fontWeight: 500, fontSize: 15 }}>Generated Pincode</label>
				<input
					id="pincode"
					type="text"
					value={generatedPincode}
					readOnly
					style={{ borderRadius: 8, height: 36, fontSize: 15, paddingLeft: 12, border: '1px solid #ccc', backgroundColor: '#f9f9f9' }}
				/>
			</div>
			<button
				onClick={generatePincode}
				style={{ borderRadius: 8, padding: '12px 0', background: '#4C48B0', color: '#fff', fontWeight: 600, border: 'none', fontSize: 17, letterSpacing: 1 }}
			>
				Generate Pincode
			</button>
			{filteredCountries.length > 0 && (
				<div style={{ maxHeight: 200, overflowY: 'auto', borderRadius: 8, border: '1px solid #ccc', backgroundColor: '#fff' }}>
					{filteredCountries.map((country, index) => (
						<div
							key={index}
							onClick={() => { setSelectedCountry(country.code); setSearchTerm(''); }}
							style={{ padding: 12, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, backgroundColor: '#fff', borderBottom: '1px solid #f0f0f0' }}
						>
							<span style={{ fontSize: 18 }}>{country.flag}</span>
							<div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
								<span style={{ fontWeight: 500, fontSize: 15 }}>{country.country}</span>
								<span style={{ fontSize: 13, color: '#666' }}>{country.code}</span>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

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
					position: 'fixed',
					top: 0,
					left: 0,
					width: '100vw',
					height: '100vh',
					zIndex: 1000,
					background: `url(${FOREST}) center center/cover no-repeat`,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					margin: 0,
					padding: 0,
					border: 'none',
					boxShadow: 'none',
					gap: 0, // Remove form-level gap, use section gaps instead
				}}>
					{/* Heading at the very top with extra margin */}
					<h2 style={{ color: '#fff', textAlign: 'center', marginBottom: 8, fontSize: 32, fontWeight: 700, letterSpacing: 1 }}>Sign Up</h2>
					{/* Add a wrapper for the fields with a semi-transparent background for compactness */}
					<div style={{ background: 'rgba(30,40,30,0.72)', borderRadius: 18, padding: '40px 40px 32px 40px', boxShadow: '0 4px 32px 0 rgba(0,0,0,0.18)', minWidth: 420, maxWidth: 520, width: '100%', display: 'flex', flexDirection: 'column', gap: 22 }}>
						<div style={{ display: 'flex', gap: 48 }}>
							<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
								<label htmlFor="firstname" style={{ color: '#fff', fontWeight: 500, fontSize: 15 }}>First Name</label>
								<input id="firstname" name="firstname" type="text" value={form.firstname} onChange={handleChange} placeholder="First name" required style={{ borderRadius: 8, height: 36, fontSize: 15, paddingLeft: 12, border: '1px solid #ccc' }} />
								{errors.firstname && <span style={{ color: '#ef4444', fontSize: 13 }}>{errors.firstname}</span>}
							</div>
							<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
								<label htmlFor="lastname" style={{ color: '#fff', fontWeight: 500, fontSize: 15 }}>Last Name</label>
								<input id="lastname" name="lastname" type="text" value={form.lastname} onChange={handleChange} placeholder="Last name" required style={{ borderRadius: 8, height: 36, fontSize: 15, paddingLeft: 12, border: '1px solid #ccc' }} />
								{errors.lastname && <span style={{ color: '#ef4444', fontSize: 13 }}>{errors.lastname}</span>}
							</div>
						</div>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 4, maxWidth: 400, width: '100%' }}>
							<label htmlFor="email" style={{ color: '#fff', fontWeight: 500, fontSize: 15 }}>Email</label>
							<input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email address" required style={{ borderRadius: 8, height: 36, fontSize: 15, paddingLeft: 12, border: '1px solid #ccc' }} />
							{errors.email && <span style={{ color: '#ef4444', fontSize: 13 }}>{errors.email}</span>}
						</div>
						<div style={{ display: 'flex', gap: 48 }}>
							<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
								<label htmlFor="password" style={{ color: '#fff', fontWeight: 500, fontSize: 15 }}>Password</label>
								<input id="password" name="password" type="password" value={form.password} onChange={handleChange} placeholder="Password" required style={{ borderRadius: 8, height: 36, fontSize: 15, paddingLeft: 12, border: '1px solid #ccc' }} />
								{errors.password && <span style={{ color: '#ef4444', fontSize: 13 }}>{errors.password}</span>}
							</div>
							<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
								<label htmlFor="confirmPassword" style={{ color: '#fff', fontWeight: 500, fontSize: 15 }}>Confirm Password</label>
								<input id="confirmPassword" name="confirmPassword" type="password" value={form.confirmPassword} onChange={handleChange} placeholder="Confirm password" required style={{ borderRadius: 8, height: 36, fontSize: 15, paddingLeft: 12, border: '1px solid #ccc' }} />
								{errors.confirmPassword && <span style={{ color: '#ef4444', fontSize: 13 }}>{errors.confirmPassword}</span>}
							</div>
						</div>
						<div style={{ display: 'flex', flexDirection: 'column', gap: 4, maxWidth: 400, width: '100%' }}>
							<label htmlFor="phone" style={{ color: '#fff', fontWeight: 500, fontSize: 15 }}>Phone</label>
							<PhoneInput country={'in'} value={phone} onChange={setPhone} enableSearch={true} inputStyle={{ width: "100%", height: 36, fontSize: 15, borderRadius: 8, border: "1px solid #ccc", paddingLeft: 12 }} buttonStyle={{ marginRight: "10px", height: 36 }} containerStyle={{ width: "100%" }} />
						</div>
						{/* Pincode field with dropdown arrow below Phone */}
						<div style={{ display: 'flex', flexDirection: 'column', gap: 4, maxWidth: 400, width: '100%', position: 'relative' }}>
							<label htmlFor="pincode" style={{ color: '#fff', fontWeight: 500, fontSize: 15 }}>Pincode</label>
							<div style={{ position: 'relative' }}>
								<input
									id="pincode"
									name="pincode"
									type="text"
									value={form.pincode}
									onChange={handleChange}
									placeholder="Select or enter pincode"
									required
									style={{ borderRadius: 8, height: 36, fontSize: 15, paddingLeft: 12, border: '1px solid #ccc', width: '100%', appearance: 'none' }}
								/>
								<span
									style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'auto', color: '#888', fontSize: 18, cursor: 'pointer' }}
									onClick={() => setShowPincodeDropdown(true)}
								>&#9662;</span>
								{showPincodeDropdown && (
									<div style={{ position: 'absolute', top: 44, left: 0, zIndex: 10, width: '100%', background: '#fff', borderRadius: 8, boxShadow: '0 4px 16px rgba(0,0,0,0.12)', padding: 16 }}>
										{/* Only show country, state, and dropdown arrow */}
										<div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
											<div style={{ display: 'flex', gap: 16 }}>
												<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
													<label htmlFor="country" style={{ fontWeight: 500, fontSize: 15 }}>Country</label>
													<select
														id="country"
														value={selectedCountryDropdown || ''}
														onChange={e => { setSelectedCountryDropdown(e.target.value); setSelectedAreaDropdown(''); }}
														style={{ borderRadius: 8, height: 36, fontSize: 15, paddingLeft: 12, border: '1px solid #ccc' }}
													>
														<option value="">Select country</option>
														{countryData.map((country, idx) => (
															<option key={country.code} value={country.code}>{country.country}</option>
														))}
													</select>
												</div>
												<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
													<label htmlFor="state" style={{ fontWeight: 500, fontSize: 15 }}>State</label>
													<select
														id="state"
														value={selectedAreaDropdown || ''}
														onChange={e => setSelectedAreaDropdown(e.target.value)}
														disabled={!selectedCountryDropdown}
														style={{ borderRadius: 8, height: 36, fontSize: 15, paddingLeft: 12, border: '1px solid #ccc', background: !selectedCountryDropdown ? '#f3f3f3' : '#fff' }}
													>
														<option value="">Select state</option>
														{selectedCountryDropdown && countryData.find(c => c.code === selectedCountryDropdown)?.areas.map(area => (
															<option key={area.state} value={area.state}>{area.state}</option>
														))}
													</select>
												</div>
											</div>
											<div style={{ textAlign: 'right' }}>
												<span
													style={{ color: '#888', fontSize: 18, cursor: 'pointer', userSelect: 'none' }}
													onClick={() => setShowPincodeDropdown(false)}
												>&#10006;</span>
												{/* Close icon */}
											</div>
											<div style={{ textAlign: 'center' }}>
												<button
													type="button"
													style={{ borderRadius: 8, padding: '8px 24px', background: '#4C48B0', color: '#fff', fontWeight: 600, border: 'none', fontSize: 15, letterSpacing: 1, marginTop: 8 }}
													disabled={!selectedCountryDropdown || !selectedAreaDropdown}
													onClick={() => {
														const country = countryData.find(c => c.code === selectedCountryDropdown);
														const area = country?.areas.find(a => a.state === selectedAreaDropdown);
														if (area) {
															setForm({ ...form, pincode: area.pincode });
															setShowPincodeDropdown(false);
														}
													}}
												>Select</button>
											</div>
										</div>
									</div>
								)}
							</div>
						</div>
						<div style={{ display: 'flex', gap: 48 }}>
							<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
								<label htmlFor="address1" style={{ color: '#fff', fontWeight: 500, fontSize: 15 }}>Address 1</label>
								<textarea id="address1" name="address1" value={form.address1} onChange={handleChange} placeholder="Address line 1" style={{ borderRadius: 8, minHeight: 60, fontSize: 15, padding: '10px 12px', border: '1px solid #ccc', resize: 'vertical', width: '100%' }} maxLength={300} />
								{/* GSTIN field below Address 1 */}
								<label htmlFor="gstin" style={{ color: '#fff', fontWeight: 500, fontSize: 15, marginTop: 8 }}>GSTIN <span style={{ fontWeight: 400, fontSize: 13, color: '#bbb' }}>(optional)</span></label>
								<input id="gstin" name="gstin" type="text" value={form.gstin} onChange={handleChange} placeholder="GSTIN (if any)" style={{ borderRadius: 8, height: 36, fontSize: 15, paddingLeft: 12, border: '1px solid #ccc', marginBottom: 4 }} maxLength={20} />
							</div>
							<div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
								<label htmlFor="address2" style={{ color: '#fff', fontWeight: 500, fontSize: 15 }}>Address 2</label>
								<textarea id="address2" name="address2" value={form.address2} onChange={handleChange} placeholder="Address line 2 (optional)" style={{ borderRadius: 8, minHeight: 60, fontSize: 15, padding: '10px 12px', border: '1px solid #ccc', resize: 'vertical', width: '100%' }} maxLength={300} />
							</div>
						</div>
						{errors.address1 && <span style={{ color: '#ef4444', fontSize: 13 }}>{errors.address1}</span>}
						<button type="submit" style={{ borderRadius: 8, padding: '12px 0', background: '#4C48B0', color: '#fff', fontWeight: 600, border: 'none', fontSize: 17, marginTop: 8, letterSpacing: 1, width: '100%' }}>Sign Up</button>
					</div>
				</form>
			)}
		</>
	);
}