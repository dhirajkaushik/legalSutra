app.controller('MainCtrl',['$scope', function($scope){
	$scope.openNav = function(){
			$(".sidenav").css("width","250px");
			$(".main-content").css("marginRight", "250px");
			//$(".site-header").css("marginRight", "250px");
			$(".header-bar").css("marginRight", "250px");
			$("footer").css("marginRight","0px");
			$(".footer_top_holder").css("marginRight","0px");
			$(".footer_bottom_holder").css("marginRight","0px");

			$("body").css("backgroundColor","rgba(0,0,0,0.4)");
	}
	
	
	$scope.closeNav = function() {
    $(".sidenav").css("width","0");
    $(".main-content").css("marginRight","0");
		//$(".site-header").css("marginRight", "0px");
		$(".header-bar").css("marginRight", "0px");
		$("footer").css("marginLeft","0px");
		$(".footer_top_holder").css("marginLeft","0px");
		$(".footer_bottom_holder").css("marginLeft","0px");
    $("body").css("backgroundColor","white");
}
	$scope.openNav1 = function(){
			$(".sidenav1").css("width","250px");
			$(".main-content").css("marginLeft", "250px");
			//$(".site-header").css("marginRight", "250px");
			$(".header-bar").css("marginLeft", "250px");
			$("footer").css("marginLeft","0px");
			$(".footer_top_holder").css("marginLeft","0px");
			$(".footer_bottom_holder").css("marginLeft","0px");
			

			$("body").css("backgroundColor","rgba(0,0,0,0.4)");
	}
	
	
	$scope.closeNav1 = function() {
    $(".sidenav1").css("width","0");
    $(".main-content").css("marginLeft","0");
		//$(".site-header").css("marginRight", "0px");
		$(".header-bar").css("marginLeft", "0px");
		$("footer").css("marginRight","0px");
		$(".footer_top_holder").css("marginLeft","0px");
		$(".footer_bottom_holder").css("marginLeft","0px");
    $("body").css("backgroundColor","white");
}
}])



.controller('AboutCtrl',['$scope', function($scope){}])
.controller('attorneyCtrl',['$scope', function($scope){}])


.controller('blogCtrl',['$scope', function($scope){}])


.controller('servicesCtrl',['$scope', function($scope){}])

.controller('BarMembershipCtrl',['$scope', function($scope){
	$scope.barMemberShips = [
		{
			name: "Bar Council of India",
			description: "The Bar Council of India is a statutory body established under section 4 of The Advocates Act 1961 that regulates the legal practice and legal education in India. Its members are elected from amongst the practicing lawyers in the country and as such represents the Indian Bar. It prescribes standards of professional conduct, etiquettes and exercises disciplinary jurisdiction over the bar. It also sets standards for legal education and grants recognition to Universities whose degree in law will serve as a qualification for students to enroll themselves as advocates upon graduation. As per the Advocates Act, the Bar Council of India consists of members elected from each state bar council, and the Attorney General of India and the Solicitor General of India who are ex officio members. The members from the state bar councils are elected for a period of five years. The council elects its own Chairman and Vice-Chairman for a period of two years from amongst its members. Assisted by various sub-committees of the Bar Council, the Chairman acts as its Chief Executive and Director.",
			imageUrl:'../images/BCI.png'
		},
		{
			name: "Indian National Bar Association",
			description: "The indian National Bar Association (INBA), with approximately 370,000 members, is the world’s largest voluntary professional association. The Association has long served a dual role as advocate for the legal profession and for the public. With the growing complexity of society and our legal system, the Association’s public role has gained both emphasis and breadth.",
			imageUrl:'../images/INBA.png'
		},
		{
			name: "Supreme Court Bar Association",
			description: "The Supreme Court Bar Association (SCBA) is an Indian bar association, comprising the practicing lawyers of the Supreme Court of India. From its very inception, the Supreme Court Bar Association has been in the vanguard of the movement for upholding, maintaining and consolidation of the constitutional values of democracy, rule of law and independence of Judiciary. In its meeting dated 4th May, 1951, the Executive Committee of the Bar Association consisting of legal luminaries like M. C. Setalvad, C. K. Daphtary and K. M. Munshi spoke of their deep concern against the first amendment of the Constitution. The Committee in its resolution observed that no attempt should be made to abridge or limit the Fundamental Rights. The Committee further pointed out that the Constitution was in operation only for a short period of sixteen months and the Supreme Court had no occasion to pronounce on the validity of various State laws. The Executive Committee also condemned the proposed move to combine the office of Law Minister and Attorney General as a threat to independence of Judiciary. During the first decade itself, the Bar Association showed its humane concern for poor litigants and decided to have its own Legal Aid Scheme. It came forward to raise its voice against the contempt notice issued by Patna High Court against the defence lawyer who had written an article against the report of the Law Commission. The Supreme Court Bar Association has thus maintained its fraternal links with other Bar Associations in India. It also showed its concern for the indigent and infirm members of the Bar who needed financial support. During this first decade, the Supreme Court also showed interest in the legal research by becoming a corporate member of the Indian Law Institute.",
			imageUrl:'../images/SCBA.png'
		}
	];
}])

.controller('HomeCtrl',['$scope', function($scope){
	//$(".hero").css( "border", "9px solid red" );
	/*$(".hero").flexslider({
		directionNav: false,
		controlNav: true,
	});*/
	$scope.myInterval = 2000;
  $scope.noWrapSlides = false;
  //$scope.active = 0;
  var slides = $scope.slides = [
		{
			image: '../images/slider-1.jpg',
			text: "Law and order exist for the purpose of establishing justice.",
			id: 0
		},
		{
			image: '../images/slider-2.jpg',
			text: "We are for truth, no matter who tells it. We are for justice, no matter who it's for or against.",
			id: 1
		},
		{
			image: '../images/slider-3.jpg',
			text: "Individuals can resist injustice, but only a community can do justice.",
			id: 2
		}
	];

}])

.controller('AttorneyCtrl',['$scope', function($scope){
		$scope.VinodKaushik = {
		}
}])





.controller('bankRuptcyCtrl',['$scope', function($scope){
		$scope.bankRuptcy =
		[
		
			
		{
				name:'Bankruptcy',
				detail:"Bankruptcy as accepted universally is a legally declared inability or impairment of ability of an individual or organization to pay its creditors. Bankruptcy can be classified as Voluntary and Involuntary. The bankruptcy initiated by the debtor who is an individual or organization is called Voluntary Bankruptcy whereas the bankruptcy initiated by a Creditor against the individual or corporate debtor is called the Involuntary Bankruptcy.An involuntary bankruptcy petition may not be filed against an individual consumer debtor who is not engaged in business.Bankruptcy was originally planned as a remedy for creditors and not debtors. Creditors may file a bankruptcy petition against a business or corporate debtor in an effort to recoup a portion of what they are owed or initiate a restructuring.During the time of King Henry VIII, bankruptcy law allowed a creditor to seize all of the assets of a trader or business who could not pay his debts. Additionally, on top of losing all of his property, the debtor has to loose his freedom and is also subject to imprisonment for failure to pay his debts. It is very common that individuals are driven to suicide by loan collectors or the defaulters killing their bankers / financiers. This leaves the family of the debtor in the position of having to pay the debts in order to obtain the release of the debtor. Even though the Individuals filing for bankruptcy are rarely seen or noticed. India does not have a clear law on corporate bankruptcy even though individual bankruptcy laws have been in existence since 1874. The current laws on Insolvency in force were enacted in 1909 and 1920 called as Presidency Towns Insolvency Act and Provincial Insolvency Act, 1920 respectively. The Insolvency and Bankruptcy Code, 2016 is a quite bold step in this aspect.",
				

			}
			
			];
}])
	
	
	
.controller('PracticeAreaCtrl',['$scope', function($scope){
		$scope.practiceAreas =
		[
			{
				name:'Banking & Finance',
				detail:"Sophisticated Banking & Finance practice has a formidable reputation in developing innovative solutions for our clients by incorporating complex financing techniques that lead the industry. We advises our clients across the full spectrum of financing transactions, including corporate facilities, leveraged finance facilities for domestic, overseas and cross-border buyouts, derivatives, trade finance, project finance, asset and structured finance and restructurings. Our lawyers understand each client's unique needs and provide tailored solutions across national borders. We are uniquely positioned to support the banking, corporate and cross-border financing requirements of each of our clients and ensure client transactions are successfully concluded by assisting clients in obtaining the required governmental authorizations, approvals and registrations through close coordination with government authorities and regulatory bodies. Our Banking & Finance practice frequently draws on our vast industry and regulatory experience in sectors such as infrastructure, communications and transportation, as well as competition, antitrust, real estate and tax. By doing so, we assist clients in effectively structuring transactions to respond to and anticipate industry and regulatory concerns."
			}
				];
}])
	
	.controller('criminalLawCtrl',['$scope', function($scope){
		$scope.criminalLaw =
		[
		
			
		{
				name:'Criminal law',
				detail:"LegalSutra lawyers are specialized for Criminal Cases related to Murder, Rape, Forgery, Theft, Dacoity &amp; Kidnapping. Our criminal defense lawyers are among the top for Criminal cases and deal with the Criminal issues. The law that deals with conduct considered as harmful to society as a whole. It regulates social conduct and proscribes whatever is threatening, harmful, or otherwise endangering to the Life property, health, safety, and moral welfare of people. It includes the punishment of people who violate these laws. We assist our clients at every level of trial as a defense counsel. We represent clients on all types of criminal cases across courts and tribunals. We have our network of criminal lawyers around the country and thus our clients do not have to engage local lawyers. We have in our panel of advocates, Advocates on Records (AOR) who can file petitions directly with the Supreme Court.",
				subHeading : "We cater to the needs of our clients in all areas of criminal litigation and represent them in an array of matters such as",
				subHeadingPoints : ["Quashing of FIR","Criminal Writs","Criminal Complaints","Domestic Violence","Bank/Financial Institutions Fraud and Forgery","Misappropriation of funds","Embezzlement","Criminal Breach of Trust","Cheating","FEMA violation","Prevention of Corruption Act.","Negotiable Instrument Act.","Narcotics and Drugs violations","Bails","Trial","Evidence","Suspension of Sentence","Appeals","Revisions"]

			}
			
			];
}])
	
	.controller('competitionAntitrustCtrl',['$scope', function($scope){
		$scope.competitionAntitrust =
		[
			{
				name:'Competition and Anti-Trust',
				detail:"Our Competition / Antitrust Law practice is internationally recognized for its expertise and knowledge in this sphere. Apart from defending our clients facing cartel and bid-rigging investigations, our Competition / Antitrust lawyers advise clients on numerous abuses of dominance matters and merger control filings and analyses. We exercise utmost sensitivity while dealing with competition and antitrust cases, especially when it involves clients accused of cartel activity in particularly sensitive sectors, high profile or ground breaking merger control work and abuse of dominance representation. The team spends a considerable amount of time and effort in getting to know the client's industry in order to appreciate and understand sector specific issues and the clients' interests. The members of our Competition / Antitrust  are widely recognized as leaders on matters of Indian competition law"
			}
			
			];
}])

.controller('cyberSecurityCtrl',['$scope', function($scope){
		$scope.cyberSecurity =
		[
	
			{
				name:'Cyber Law Crimes',
				detail:"Our Cyber law team comprises of highly skilled and qualified professionals that include cyber lawyers, IT experts, IT consultants who have succeeded in resolving the most complex cyber cases including cyber crimes by working in close association with Cyber Crime Cell of the Indian Police Department. We specialize in Cyber laws and its application in the Indian scenario and in the International perspective and have a reputed and established specialized practice in this field. A substantial part of our practice consists of advising with respect to Information Technology Law compliance and drafting the Privacy Policies, Terms & Conditions, etc. of E-Commerce Companies, and we are retainers with a diverse variety of E-commerce companies. We have a thriving practice in the Online Gaming industry. We are experts and practice as well as litigate in the areas of: cyber security, cyber crimes, IT Act, 2000 (Data theft, Source code theft, Hacking, DDoS, Ransom ware, Virus, Pornography laws, facebook abuse, online defamation, child pornography laws, Cyber stalking, revenge porn, Ecommerce laws,), IPR (Trademark & Copyright registration and cases), Financial crimes (Online Banking frauds, credit card frauds, email fraud, matrimonial frauds, Stock market frauds, MLM frauds), Privacy law, Digital Wallet issues, Electronic evidence issues, IT Act, 2000 Compliance and Privacy Law Compliance. We provide expert opinion on various matters wherever technology and law intersects. We practice in different courts across the country as expert legal counsels. We take matters pertaining to Expert Arguments, Bails, Cross Examinations, Appeals, Drafting & vetting of petitions involving technology, electronic evidence."
			}
			];
}])


.controller('corporateCommercialCtrl',['$scope', function($scope){
		$scope.corporateCommercial =
		[
	
			{
				name:'Corporate and Commercial',
				detail:"Our lawyers advise clients on a broad spectrum of corporate and commercial work and focus their energies on finding viable and sustainable solutions, according to the client's requirements. We extend full spectrum of interdisciplinary resources to our clients and thus combine industry and specialist expertise with exceptional transactional skills and a vast experience in M & A processes. Due to our commercial and multi-dimensional approach, we are capable to successfully deal with complex and cutting-edge transactions and to develope long-standing relationships with our clients. Our scope of work includes advising our clients on mergers, joint ventures, acquisitions and sales of controlling interest, minority sales and investment, pre-IPO placements, public takeover offers, hostile takeovers, management buy-outs, business transfers and asset sales in both domestic and cross-border transactions. We advise companies on their acquisitions and investments in India as other parts of the globe."
			}
			];
}])

.controller('whiteCollarCtrl',['$scope', function($scope){
		$scope.whiteCollar =
		[
	
			{
				name:'White Collar Crime',
				detail:"The members of LegalSutra's White Collar Crime practice offer exceptional skills in dealing with white collar crime issues. We regularly advise clients, including multinational companies, private equity investors and their Indian portfolio companies on matters pertaining to anti-corruption and ethical practices.Our work includes assisting in investigation, pre-investment due diligence on a target entity in India and its promoters, advising clients on framing policies for Indian companies, conducting compliance workshops and advising clients on other contentious matters (including litigation). Our experience allows us to counsel clients on strategic issues such as corrective actions and voluntary disclosures"
			}
			];
}])

.controller('worldWideCtrl',['$scope', function($scope){
		$scope.worldWide =
		[
	
			{
				name:'World Wide',
				detail:"On Indian Laws LegalSutra team can conveniently and efficiently represent clients located anywhere within or outside India. This is possible because India Laws are basically federal in nature. Though Indian States are allowed to make amendments in the basic Law as may be required under the geographical conditions or depending upon the law and order circumstances of the state e.g. the provision of pre-arrest bail U/s. 438 Cr. P.C. is not applicable in the state of Uttar Pradesh. It has been seen that most of the NRIs are finding it difficult in handling their disputes back at home more specifically property and matrimonial disputes filed by their relatives in India. We have a team of specialist Counsels who can advise over internet the NRI clients in fighting back their matrimonial and any other civil disputes.Internet has changed everything. In today’s digital marketplace clients have more options and vastly more choice of freedom. Geography is no longer an obstacle. You can buy just what you want from almost anywhere you are.Likewise, digital communication allows unprecedented freedom when it comes to choosing a Lawyer with credibility. You no longer have to hire someone who is locally placed. Now you can hire the best, no matter where you live or where the Lawyer has to appear to contest your case.We at LegalSutra provide Lawyers with highest credibility and integrity for a world that moves at digital speed. We use latest technology to effectively serve our clients.Across India and around the world, our clients finds it easy to stay in touch and gets timely answer over phone, eMail or secure web based communications.We always offer personal touch in our communication with a motto to help people in their time of need of legal assistance. We are providing Online Dispute Resolution for our esteemed national and international clients for resolving cyber and e-commerce disputes. Please visit our ‘Online Dispute Resolution’ page for an insight of full proof mechanism."
			}
			];
}])

			
			/*{
				name:'Dispute Resolution',
				detail:"The Dispute Resolution practice is in the business of resolving disputes and putting matters to rest. We handle a wide variety of civil disputes and proceedings, domestic and international arbitrations, statutory and regulatory proceedings, criminal proceedings in a corporate context and assisting in formulating litigation strategies relating to foreign investments and corporate transactions. Our advice extends across all avenues of dispute resolution, including litigation and arbitration and across diverse sectors such as banking and finance, competition, construction and engineering, corporate, employment and pensions, employee benefits, financial services, fraud and financial crime, group litigation, professional negligence, real estate, restructuring and insolvency and trusts and succession and probate matters. Our clientele includes a range of national and international clients including major corporates, banks, financial institutions, private equity houses, investors, high-net- worth individuals, brand owners, high street retailers, employers and employees, contractors, developers, re-insurers, architects and engineers and landlords and tenants. The Firm is one of the only firms in the country to have advised the Government of India in relation to international bilateral treaty disputes."
			},
			{
				name:'Energy, Infrastructure and Resources',
				detail:"Our Energy, Infrastructure & Resources tram is comprehensive, domain focused legal which advises a range of domestic and international clients, including government entities, project sponsors, developers, construction contractors, investors, multilateral agencies, banks and financial institutions. We counsel clients in the sectors of energy projects such as oil and gas and power (conventional, renewable and nuclear) projects, infrastructure projects involving roads, ports, airports, urban infrastructure and railways and natural resources projects involving mines and metals. Within these sectors we advise clients on the entire range of legal matters, including mergers and acquisitions, investments (strategic, financial and private equity), financing (non-recourse project finance, structured finance and securitization), public private partnership projects, project documentation (off take agreements, fuel supply agreements), bid advisory, risk analysis, construction contracts, operation and maintenance contracts as well as regulatory issues pertaining to the sectors. We work extensively with other practice areas of the Firm, including tax, capital markets, intellectual property and dispute resolution to provide holistic, end to end advise to our Clients. India is at the cusp of an infrastructure boom and out team is well placed to assist clients with domain expertise, industry and regulatory insights and pragmatic legal solutions for infrastructure projects across India covering the full asset life cycle. We also routinely advise clients on national and international transactions."
			},
			{
				name:'Estate Planning, Trusts and Private Clients',
				detail:"The Firm has a very well-regarded Estate Planning, Trusts & Private Client practice, which comprises professionals with the necessary expertise and experience pertaining to trusts, taxation, wills and other testamentary instruments, relevant regulatory frameworks, corporate and securities laws and dispute resolution. The team is spread across our various offices and also draws from the Firm's expertise in other areas of practice, including real estate, intellectual property, and litigation, depending on the client's requirements. Our Estate Planning, Trusts & Private Client practice provides discreet advice to a range of national and international clients, including promoters of major corporate, global Indian families, high net-worth individuals, trustees, family offices and banks and financial institutions with respect to their private client needs. We advise clients on drafting family constitutions, restructuring family businesses, creation of trusts and wills, migration of residency and change of citizenship. Having acted as an advisor for over 100 years, we understand the intrinsic importance that family values provide in building a dynastic institution. Our team members are internationally recognized and are regular speakers at both international and domestic forum on estate planning, succession and asset protection issues. The members of our Estate Planning, Trusts & Private Client practice are recognized as leading lawyers in their practice areas."
			},
			{
				name:'Funds',
				detail:"Our Funds practice has deep experience and a wide breadth of knowledge of the sector as well as the regulatory framework, with regular and extensive engagements with the Indian regulators and overseas and local fund managers. We advise clients on all stages in the life cycle of a fund and provide our clients with the sophisticated advice required in the formation and operation of various types of funds. We advise several domestic and international private equity funds, including venture capital funds, asset and investment management companies and trustee companies on structuring their operations in India and on various other regulatory aspects surrounding such operations. We provide complete and integrated legal and tax solutions to various ventures capital funds, including real estate funds and mutual funds. Our Funds practice provides services which include tax efficient structuring of funds and performance fees for funding managers and employees, legal and regulatory advice and drafting of documentation for funds including their information memoranda, private placement memoranda, investment management agreements, administration agreements, subscription agreements and investment advisory agreements. We are renowned for working seamlessly with law firms in multiple jurisdictions to achieve our client's objectives."
			},
			{
				name:'Intellectual Capital',
				detail:"LegalSutra has an extensive Intellectual Property practice which assists clients in prosecution, advisory, enforcement, non-contentious transactional work, and contentious litigation work both in India and overseas, involving all forms of intellectual property including patents (including drafting and filing patent specifications in all disciplines of science and technology/engineering), trademarks, copyright, designs, plant varieties, geographical indications and domain names. We advise clients on a variety of intellectual property agreements involving trademark licensing and assignment, distribution agreements, and IP related aspects of franchising transactions. We also assist in conducting legal due diligence on portfolio of patents, trademarks and copyright works. Our Intellectual Property practice team includes litigators, transaction lawyers, patent lawyers, and engineers. Over the years, the Intellectual Property practice has built a large client base which includes Indian and multinational corporations, research institutions, universities and individuals. Our clients come from a wide range of industry sectors including pharmaceuticals, technology, media, consumer goods and retail."
			},
			{
				name:'Labour and Employment',
				detail:"LegalSutra's dedicated Labour & Employment practice is adept at handling all labour and employment related matters. We regularly advise our clients on employment related agreements, engagement of consultants, executive compensation, statutory compliances (including social security contributions, employee benefits including maternity benefits, statutory bonus and other liabilities), drafting, vetting and designing human resource and personnel policies and manuals, labour disputes and employee claims, confidentiality and data protection issues, structuring and implementing employee stock options and incentive plans, expatriate employment and secondments, voluntary retirement schemes, assignment of intellectual property rights and review of collective bargaining agreements and charters of demand. We also review and coordinate industrial relations issues for transactions, including documentation related to transfer of employees pursuant to business or asset transfers, employment due diligence, and advise on internal restructurings or ongoing company management issues relating to domestic enquiry procedures. We also assist and advise clients in managing human resources related crises and sensitive terminations which include developing strategy and documentation for separation or exit of senior management personnel and other employees. When advising our clients, we look to ensure that they have the benefit of our perspective on the issues at hand, both from a statutory as well as a practical and strategic perspective."
			},
			{
				name:'Real Estate',
				detail:"Our Real Estate practice is one of the widely recognized and leading real estate practices in India. We advise all stakeholders, owners, developers (corporate and individual) and both domestic and foreign investors in all types of real estate transactions. Our practice covers the entire life span of real estate transactions, from acquisition and development to leasing and sale. We have been involved in major real estate transactions across India, and regularly advise clients in relation to residential, commercial and industrial developments, special economic zones (SEZs), townships, multiplexes, malls and IT parks. We advise clients on title of properties, lending/borrowing for real estate development and investments (foreign and domestic) by funds and private equity players in the real estate sector. We also advise clients on development and joint development of property, construction contracts and disputes arising out of construction contracts. Being a full service law firm, in addition to our core expertise from the Real Estate practice group, we provide comprehensive support for any real estate transaction by drawing resources from various other practice groups including our Funds, Taxation, Corporate & Commercial groups. We are able to respond to complex situations with speedy and creative solutions that are demanded in today's highly competitive and rapidly changing real estate environment."
			},
			{
				name:'Taxation (Direct & Indirect Taxes)',
				detail:"In matters of taxation, LegalSutra has one of the leading practices in the country. Our integrated Taxation practice excels in both direct and indirect taxation. We serve a diverse client base, ranging from listed multi-national corporations and domestic conglomerates to investment funds and high net-worth individuals. We regularly advise clients on all tax-related aspects of corporate, commercial and financial transactions and provide stand-alone tax advisory and well-rounded and highly specialized tax representation and tax litigation services at various forum, including obtaining 'Advance Rulings' for foreign companies and foreign investors. Our tax advice encompasses tax efficient structures for public and private mergers and acquisitions, spin-offs, reorganization, entry structures, fund formation, tax efficient capitalization of subsidiaries, private equity transactions and transfer pricing advisory, in addition to providing tax opinions on corporate taxation, cross-border taxation and on contentious tax matters. Our tax experts also provide solutions in respect of indirect taxation, leading to tax efficient supply chain management and equipment procurement and construction (EPC) contracts. Our advisory services include providing advice on domestic and international trade and regulatory areas such as customs, excise, goods & service tax (GST), special economic zones (SEZs), WTO trade protection measures such as anti-dumping and safeguard duty, import and export control, legal metrology, drugs and cosmetics, export incentive schemes, amongst others. Lauded for their considerable experience, our tax experts represent clients before governmental authorities in respect of delicate, complex and controversial tax issues."
			},
			{
				name:'Technology, Media and Telecommunication',
				detail:"Our Technology, Media &Telecommunications practice has significant experience and in-depth expertise in the sector, both from a regulatory and transactional standpoint. Our lawyers have been part of many transactions involving media houses, telecom operators and technology companies (both, start-ups and well established). We have also closely participated in and represented clients in legal proceedings involving the Indian telecommunications regulator and appellate body, the information and broadcasting ministry as well as the various state high courts and the Supreme Court of India on telecom policy matters. As a part of our TMT practice, we routinely advise clients in relation to regulatory, policy and compliance issues, and on information technology (IT), outsourcing, data privacy and protection, and contractual and interconnection agreements. Our specialist lawyers provide industry-specific and tailored advice to our clients including strategic and commercial advice and advising on private equity or Mergers and acquisitions (M&A) transactions which require specialist technology inputs. Our media experience ranges from broadcasting and endorsement contracts to television show licensing arrangements and joint venture arrangement between media companies."
			},
			
		*/	
			


.controller('ContactCtrl',['$scope', function($scope){
        $scope.sendEmail = function(){
        	//mail.legalsutra.co.in
        	Email.send("legalsutra@legalsutra.co.in","legalsutra@legalsutra.co.in","Test Email","this is the body","https://sg2plcpnl0081.prod.sin2.secureserver.net","legalsutra","iri@tlZburEE5O");
        	console.log("Email is sent");
        	Alert("Email Sent");
        }
}])


.controller('attorneyCtrl', [
'$scope',
function($scope){
	$scope.texts = [{val1:"value1"},{val1:"value2"}];
	/*$scope.heading = {
		pTag: 'When you hire the LegalSutra Attorneys, you get quality with uncompromising standards. We have built our reputation on it. Attorneys in our team are handpicked for their legal experience and education, attention to detail and sensitivity to the special needs of the clients we serve. Our attorneys are:',
		litag :[
			'Best Graduates of their colleges and universities.',
			'Experienced with decades of combined legal experience in richly diverse settings.',
			'Team players, who work together and in support of one another to serve our clients.'
		],
		h2Tag :'What Sets Our Attorneys Apart',
		secondPTag :'In short, they are superbly equipped to understand the real-world complexities of legal practice, and to tailor effective strategies to the needs of each of our client.'
	}*/
	$scope.attorneys = [
		{
			attName:"Attorney 1",
			jobDescription:'Attorney 1 :Job Description',
			bioText:'Attorney 1 : Bio Text',
			attLink:'Attorney 1 : Link',
			headshotUrl:'../images/avatar.jpg',
			headshotUrl300x243:'../images/avatar.jpg',
			aboutUs:'',
			row: 0
		},
		{
			attName:'Attorney 2',
			jobDescription:'Attorney 2 :Job Description',
			bioText:'Attorney 2 : Bio Text',
			attLink:'Attorney 2 : Link',
			headshotUrl:'../images/avatar.jpg',
			headshotUrl300x243:'../images/avatar.jpg',
			aboutUs:'',
			row: 0
		},
		{
			attName:'Attorney 3',
			jobDescription:'Attorney 3 :Job Description',
			bioText:'Attorney 3 : Bio Text',
			attLink:'Attorney 3 : Link',
			headshotUrl:'../images/avatar.jpg',
			headshotUrl300x243:'../images/avatar.jpg',
			aboutUs:'',
			row: 0
		},
		{
			attName:'Attorney 4',
			jobDescription:'Attorney 4 :Job Description',
			bioText:'Attorney 4 : Bio Text',
			attLink:'Attorney 4 : Link',
			headshotUrl:'../images/avatar.jpg',
			headshotUrl300x243:'../images/avatar.jpg',
			aboutUs:'',
			row: 1
		},
		{
			attName:'Attorney 5',
			jobDescription:'Attorney 5 :Job Description',
			bioText:'Attorney 5: Bio Text',
			attLink:'Attorney 5 : Link',
			headshotUrl:'../images/avatar.jpg',
			headshotUrl300x243:'../images/avatar.jpg',
			aboutUs:'',
			row: 1
		}
	];
	/*$scope.pageRows = [];
	var attorneyList = [];
	var index =0;
	angular.forEach($scope.attorneys, function(attorney){
			console.log(attorney.row);
			console.log(index);
			if(attorney.row == index){
					console.log("Condition Met");
					attorneyList.push(attorney);
					var pageRow = { rowId : index+1 , attorneys : attorneyList};
				  $scope.pageRows.push(pageRow);
			}
			else {
				console.log('else');
				index = index+1;
				attorneyList = [];

			}
   });*/

	$scope.pageRows =
	[
			{
				rowId:"1",
				attorneys:
				[
						{
								attName:"Vinod Kaushik",
								jobDescription:'Founder & Managing Partner',
								bioText:'Is the founder of LegalSutra. Mr. Kaushik possesses a good understanding of dispute resolution mechanism. Well known for his dedication, credibility, integrity and understanding of the client needs. Core areas of Mr. Kaushik has been business planning, finance, mergers, accumulation, foreign funding, insolvency investigation, matrimonial, property disputes and cyber frauds.',
								attLink:'Attorney 1 : Link',
								headshotUrl:'../images/Attorneys/VinodKaushik.jpg',
								headshotUrl300x243:'../images/Attorneys/VinodKaushik300x243.jpg',
								aboutUs:''

						},
						{
								attName:'Anoj K Padhy',
								jobDescription:'Head-Criminal & Food Safety Laws',
								bioText:'Retired as Chief Public Prosecutor and Deputy Legal Advisor, Commissionairate of Food Safety, GNCT of Delhi in the year 2013, Mr. Padhy has joined LegalSutra as Head-Criminal Law. Mr. Padhy with a standing of 36 years of practice in Criminal Law and Food Safety and representing Government of National Capital Territory of Delhi (Govt. of Delhi) at District and High Court Level. ',
								attLink:'Attorney 4 : Link',
								headshotUrl:'../images/Attorneys/avatar.jpg',
								headshotUrl300x243:'../images/Attorneys/avatar.jpg',
								aboutUs:''
						},
						{
								attName:'Anil Kumar Chaturvedi',
								jobDescription:'Head-Corporate & Insolvency',
								bioText:'Retired as Regional Director, Western & North-Western Region, Ministry of Corporate Affairs, Government of India, Mr. Chaturvedi has joined LegalSutra as Head-Corporate Law &amp; Insolvency. Mr. Chaturvedi has vast experience of representing Government of India, Government of Delhi, Delhi Vidyut Board in Corporate and other matters at various High Courts and Hon’ble Supreme Court of India.',
								attLink:'Attorney 2 : Link',
								headshotUrl:'../images/Attorneys/AnilKumarChaturvedi.jpg',
								headshotUrl300x243:'../images/Attorneys/AnilKumarChaturvedi300x243.jpg',
								aboutUs:''

						},

				]
			},
			{
				rowId:"2",
				attorneys:
				[

						{
								attName:'Ritu Gautam',
								jobDescription:'Head- Cyber Law',
								bioText:'Ms. Gautam is LLB, LLM, MBA and is currently pursuing Ph.D in Cyber Law. Ms. Gautam has a deep knowledge and understanding of cyber disputes redressal mechanism.',
								attLink:'Attorney 4 : Link',
								headshotUrl:'../images/Attorneys/avatar.jpg',
								headshotUrl300x243:'../images/Attorneys/avatar.jpg',
								aboutUs:''
						},
						{
								attName:'Arvind Gupta',
								jobDescription:'Head- Environment Laws',
								bioText:'Has been appearing for the clients in Environment, Corporate, Litigation, Contractual, Property & Land related matters for the last 11 years after doing LLB from Banaras Hindu University.  ',
								attLink:'Attorney 4 : Link',
								headshotUrl:'../images/Attorneys/avatar.jpg',
								headshotUrl300x243:'../images/Attorneys/avatar.jpg',
								aboutUs:''
						},
						{
								attName:'Chaitraly Deshmukh',
								jobDescription:'Head- Media Laws',
								bioText:'Pursuing Ph.D in Law from Symboisis Pune, Chaitraly is the head of Media Law. She is also successfully handling Intellectual Property Right and Matrimonial disputes.',
								attLink:'Attorney 4 : Link',
								headshotUrl:'../images/Attorneys/avatar.jpg',
								headshotUrl300x243:'../images/Attorneys/avatar.jpg',
								aboutUs:''
						}

				]
			},
			{
				rowId:"3",
				attorneys:
				[
						{
								attName:'Rajni Ojha',
								jobDescription:'Head- Constitutional Law',
								bioText:'Mrs. Ojha has been practicing at Allahabad High Court since 1996. Her core areas of expertise had been Constitutional Law, PILs, Land & Revenue and Civil.',
								attLink:'Attorney 3 : Link',
								headshotUrl:'../images/Attorneys/avatar.jpg',
								headshotUrl300x243:'../images/Attorneys/avatar.jpg',
								aboutUs:''

						},
						{
								attName:'Vinod Kr Sharma',
								jobDescription:'Associate',
								bioText:'Vinod has joined Legalsutra as Associate and has good experience in handling Matrimonial Disputes, Juvenile Justice, Hindu Succession Law, Labour & Industrial Laws',
								attLink:'Attorney 4 : Link',
								headshotUrl:'../images/Attorneys/avatar.jpg',
								headshotUrl300x243:'../images/Attorneys/avatar.jpg',
								aboutUs:''
						},
						{
								attName:'Prashant Johri',
								jobDescription:'Associate',
								bioText:'A topper of his college has joined Legalsutra as Associate having working experience ranging across various sectors which include Civil, Real Estate, Environment Law',
								attLink:'Attorney 5 : Link',
								headshotUrl:'../images/Attorneys/avatar.jpg',
								headshotUrl300x243:'../images/Attorneys/avatar.jpg',
								aboutUs:''
						}

				]
		},
		{
			rowId:"4",
			attorneys:
			[

					{
							attName:'Reena Rani',
							jobDescription:'Associate',
							bioText:'Reena has joined as Associate. She has long standing in handling real estate and infrastructure, retail and ecommerce and civil disputes independently.',
							attLink:'Attorney 5 : Link',
							headshotUrl:'../images/Attorneys/avatar.jpg',
							headshotUrl300x243:'../images/Attorneys/avatar.jpg',
							aboutUs:''
					},
					{
							attName:'Amit Tiwari',
							jobDescription:'Associate',
							bioText:'A graduate in Law from Banaras Hindu University, Amit is good in handling Criminal Litigations, small causes case and disputes related to Negotiable Instruments independently at Presidency Courts.',
							attLink:'Attorney 4 : Link',
							headshotUrl:'../images/Attorneys/avatar.jpg',
							headshotUrl300x243:'../images/Attorneys/avatar.jpg',
							aboutUs:''
					},
					{
							attName:'Karan Johri',
							jobDescription:'Associate',
							bioText:'Karan, a graduate from Delhi University possess rich experience in Arbitration and Conciliation matters, Consumer Disputes, Banking, Finance, Debt Recovery & Competition Law.',
							attLink:'Attorney 5 : Link',
							headshotUrl:'../images/Attorneys/avatar.jpg',
							headshotUrl300x243:'../images/Attorneys/avatar.jpg',
							aboutUs:''
					}

				]
			},
			{
				rowId:"5",
				attorneys:
				[

						{
								attName:'Sujit Pandey',
								jobDescription:'Associate',
								bioText:'',
								attLink:'Attorney 5 : Link',
								headshotUrl:'../images/Attorneys/avatar.jpg',
								headshotUrl300x243:'../images/Attorneys/avatar.jpg',
								aboutUs:''
						}

					]
				}
 	];

}]);