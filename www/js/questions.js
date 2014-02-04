var questions = new Array();
//General 1
questions[0] = new Array(
	{ 
		'Q' : 'Which of the following most accurately reflects the meaning of "fiduciary?"',
		'A1' : 'Trust',
		'A2' : 'Estoppel',
		'A3' : 'Bankruptcy',
		'A4' : 'Universal',
		'Correct' : 'A1',
		'Response' : '	Fiduciary is agency.  Sometimes it is an adjective, i.e., fiduciary relationship, meaning agency relationship.  Other times it is used a noun, i.e., George is my fiduciary, meaning my agent.'
	},
	
	{
		'Q' : 'An offer is brought to a seller from a brokerage which did not take the listing.  Assuming there is no buyer agency contract and the MLS listing offered subagency, which best describes the agency relationships:',
		'A1' : 'The listing broker is the agent.',
		'A2' : 'All others, be they sales agents, associate brokers or principal brokers, are subagents.',
		'A3' : 'The listing broker and his/her sales agents are the agents; brokers and agents from other offices are subagents.',
		'A4' : 'The listing broker and the selling broker are agents, and all sales agents from either office are subagents.',
		'Correct' : 'A1',
		'Response' : 'All brokers and sales agents involved in the transaction are agents, regardless of which office they work for. There can only be one agent under an agency contract. That would be the listing broker. All other sales agents or brokers functioning under the authorization of that contract would be considered subagents.'
	},
	
	{
		'Q' : 'A principal broker who represents both the buyer and the seller, having fully disclosed his/her agency to each and obtaining informed consent from both, becomes a(n):',
		'A1' : 'dual agent.',
		'A2' : 'agent to the seller and a subagent to the buyer.',
		'A3' : 'neutral mediator.',
		'A4' : 'subagent to both the seller and the buyer.',
		'Correct' : 'A1',
		'Response' : 'This may be called dual agency or limited agency, as the agent is representing both parties in the transaction.  Sub agency exists when the sales agent or associate broker is working under the authorization of a contracting broker who represents the principal.  A single agent (who may well be married) represents only one party in the transaction.'
	},
	
	{
		'Q' : 'There were bad feelings between Jason and his neighbor Bruno.  One day Bruno put a for sale sign up on his property.  Jason wanted to make an offer on the property, but felt sure that Bruno would never accept an offer from him.  So Jason hired Broker Brumble to make an offer on the property as though Brumble was the actual buyer.  If Brumble agrees to represent Jason this way, then:',
		'A1' : 'Jason would become an undisclosed principal.',
		'A2' : 'Brumble would become a partially disclosed agent.',
		'A3' : 'Jason would become a partially disclosed principal.',
		'A4' : 'Brumble would become an undisclosed principal.',
		'Correct' : 'A1',
		'Response' : 'In this example, Jason is the principal and bumbling Brumble is the agent.  Since the customer (seller) has been misled to believe that Brumble is the buyer, and doesn\'t know that Jason is involved at all, this is clearly a case of an undisclosed principal.  Brumble could be in a world of trouble for misrepresentation, and violation of licensing rules.'
	},
	
	{
		'Q' : 'According to appraisers, a public school would be considered which of the following types of property?',
		'A1' : 'Service property',
		'A2' : 'Investment property',
		'A3' : 'Non-investment property',
		'A4' : 'Economic property',
		'Correct' : 'A1',
		'Response' : 'A service property is one that shows no profit and is used by the public, such as a public school or any other government type of property.  A personal residence would be an example of a non-investment property, and an office building would be an example of an investment property.  The difference between investment and non-investment property is cash flow, positive or negative, from the property.'
	},
	
	{
		'Q' : 'When all the homes in a defined area are similar in design and value, it is an example of the appraisal principle of:',
		'A1' : 'conformity.',
		'A2' : 'highest and best use.',
		'A3' : 'substitution.',
		'A4' : 'change or neighborhood cycle.',
		'Correct' : 'A1',
		'Response' : 'Conformity is most in evidence in a subdivision where the similarity of homes is striking.  Though the homes may have subtle differences that give the illusion of significant variety, the fact remains that they are very much alike and in the same value range.  Determining highest and best use is the first appraisal step. Substitution and neighborhood cycle are totally different principles of appraising.'
	},
	
	{
		'Q' : 'When property is not maintained properly, it can develop:',
		'A1' : 'deferred maintenance',
		'A2' : 'incurable depreciation',
		'A3' : 'plottage',
		'A4' : 'obsolescence',
		'Correct' : 'A1',
		'Response' : 'This is obviously deferred maintenance.  Incurable depreciation involves situations where the cause of the depreciation could be fixed, but the cost of repair would be too high.  Plottage is combining two contiguous parcels with a resulting increase in value, and obsolescence is a form of depreciation.'
	},
	
	{
		'Q' : 'Which of the following are correct examples of various types of depreciation?',
		'A1' : 'Physical deterioration = cracked foundation; functional obsolescence = insufficient electrical outlets; economic obsolescence = high traffic on road in front of house',
		'A2' : 'Physical deterioration = damaged road in front of house; functional obsolescence = walk-in closets; economic obsolescence = high cost of repairs to the house',
		'A3' : 'Physical deterioration = poor location; functional obsolescence = run down neighborhood; economic obsolescence = worn out appliances that are still working',
		'A4' : 'Physical deterioration = outdated furnace, still working; functional obsolescence = outdated furnace the doesn\'t work right; economic obsolescence = modern furnace that doesn\'t match the furniture',
		'Correct' : 'A1',
		'Response' : 'Each is an example of things that cause depreciation, except the modern furnace.  The problem is classification.  Physical deterioration means something isn\'t working right, i.e., cracked foundation.  Functional obsolescence involves things on the property that are working okay, but no one wants them, i.e., insufficient electrical outlets.  Economic are factors that depreciate the property value but are found outside the boundaries of the property, i.e. high traffic.'
	},
	
	{
		'Q' : 'Assuming that each of the appraisal approaches could be used effectively and appropriately, which of them would most likely be the most accurate assessment of true market value?',
		'A1' : 'Market data',
		'A2' : 'Cost approach',
		'A3' : 'Gross rent multiplier',
		'A4' : 'Income approach',
		'Correct' : 'A1',
		'Response' : 'Value is ultimately established on the basis of willing buyer, willing seller.  Thus the market data approach is by far the most accurate, providing there are sufficient good comparables as suggested to be true in this question.  The cost approach becomes useful with unique properties and, of course, the income approach is best for income properties unless there are good comparables available.  For instance, in an area where duplexes are bought and sold frequently, the comparison approach is far superior to the income approach.'
	},
	
	{
		'Q' : 'When an offer is presented, the offeror can withdraw the offer:',
		'A1' : 'any time prior to acceptance and communication to the offeror.',
		'A2' : 'after the time extended to the offeree has expired.',
		'A3' : 'any time before acceptance of the offer, with the permission of the offeree.',
		'A4' : 'any time before the offeror actually receives the offer.',
		'Correct' : 'A1',
		'Response' : 'Though an offer may have a deadline for the offeree to respond, the offeror is not bound by that time limit and can withdraw the offer any time prior to acceptance and communication of that acceptance to the offeree.'
	},
	
	{
		'Q' : 'The decision handed down by a court is referred to as a (an):',
		'A1' : 'judgment',
		'A2' : 'attachment',
		'A3' : 'lis pendens',
		'A4' : 'writ',
		'Correct' : 'A1',
		'Response' : 'This is a simple matter of fact.  A lis pendens is a notice that a court action exists, which might affect a property.  A writ is an order from the court.  An attachment is a way the court insures that payment is made, i.e. attaching wages.'
	},
	
	{
		'Q' : 'Which of the following would be considered "good consideration?"',
		'A1' : 'Loyalty',
		'A2' : 'Money',
		'A3' : 'Property',
		'A4' : 'Services',
		'Correct' : 'A1',
		'Response' : 'Money, property, and services, along with promises, are all considered "valuable consideration."   Good consideration includes intangible things like love, loyalty, and friendship.',
	},
	
	{
		'Q' : 'A deed the government uses to transfer government owned property to a private individual is known as a:',
		'A1' : 'Patent',
		'A2' : 'Warranty',
		'A3' : 'Deed',
		'A4' : 'Quit Claim Deed	Federal Land Deed',
		'Correct' : 'A1',
		'Response' : 'The patent is the instrument used exclusively for this purpose.'
	},
	
	{
		'Q' : 'Which of the following is NOT a valid means of delivering a deed from the grantor to the grantee?',
		'A1' : 'The grantor tells the grantee that the grantee is to have the property after his death',
		'A2' : 'The grantor hands the deed to the grantee.',
		'A3' : 'The grantor gives written, notarized instructions to someone to deliver the deed to the grantee after the death of the grantor.',
		'A4' : 'The grantor records the deed at the county recorder\'s office in the name of the grantee.',
		'Correct' : 'A1',
		'Response' : 'There are three valid ways to deliver a deed.  Actual delivery is the handing of (or mailing to) the grantee.  Constructive delivery is recording the deed.  Third party delivery, or holding the deed in escrow, (which must be accompanied by notarized instructions) is third party delivery.  Oral delivery is not acceptable.'
	},
	
	{
		'Q' : 'The 1866 civil rights law made which of the following activities illegal?',
		'A1' : 'Refusing to rent a room in a boardinghouse to a black man.',
		'A2' : 'Refusing to sell land to a man of German ancestry.',
		'A3' : 'Turning away a woman who wanted to buy a house for sale.',
		'A4' : 'Not being willing to rent an apartment to a Catholic person.',
		'Correct' : 'A1',
		'Response' : 'The civil rights law of 1866 said that all people were to be treated the same as white people.  The only protected class was race.'
	},
	
	{
		'Q' : 'The Real Estate Settlement Procedures Act (RESPA) covers which of the following?',
		'A1' : 'Loans for the purchase of a single to four-family dwelling.',
		'A2' : 'A loan to a small corporation to buy a small apartment building.',
		'A3' : 'A loan for the purchase of a small apartment complex.',
		'A4' : 'A loan for construction of a medical building.',
		'Correct' : 'A1',
		'Response' : 'RESPA is designed to protect the consumer when purchasing a home or small investment property.  Therefore, it does not apply to commercial loans.'
	},
	
	{
		'Q' : 'When a real estate agent directs people to or away from certain geographical areas because of who lives in those neighborhoods, they may be guilty of:',
		'A1' : 'steering',
		'A2' : 'blockbusting',
		'A3' : 'price fixing',
		'A4' : 'redlining',
		'Correct' : 'A1',
		'Response' : 'Blockbusting is designed to create panic selling, redlining is an illegal practice by lenders, and price fixing is illegally manipulating prices for services and products, such as real estate commissions.'
	},
	
	{
		'Q' : 'Good agents want to stay in touch with former buyers and sellers, so those people always think of the agent as "their agent" when they have real estate transactions come up in the future.  Unless otherwise agreed to, the Do Not Call rules say you can continue to contact someone for how long after the end of the business relationship?',
		'A1' : '18 months',
		'A2' : '90 days',
		'A3' : '120 days',
		'A4' : 'Once the business relationship is established, there is no limit.',
		'Correct' : 'A1',
		'Response' : 'Both the UAR recommended listing contract and buyer agency contract contain language such that, when the buyers/sellers sign them, they are agreeing to let the agent continue to make contact with them forever (it\'s not worded that directly, of course).  However, if at any future time that former client asks to be put on the Do Not Call list, that\'s the end of it!'
	},
	
	{
		'Q' : 'A borrower\'s payments are going to increase automatically, and periodically.  This provision is set forth in what clause?',
		'A1' : 'Escalation clause',
		'A2' : 'Prepayment penalty clause',
		'A3' : 'Acceleration clause',
		'A4' : 'Alienation clause',
		'Correct' : 'A1',
		'Response' : 'The escalation clause provides for an automatic, contractually agreed upon increase in payments on a loan, or of rent, at predetermined times.  The prepayment penalty clause requires extra payment if the loan is paid off early, acceleration is the foreclosure clause, and alienation is the due on sale clause.'
	},
	
	{
		'Q' : 'The Veterans Administration\'s version of an appraisal is called:',
		'A1' : 'Certificate of Reasonable Value (CRV)', 
		'A2' : 'FHA appraisal',
		'A3' : 'VA appraisal',
		'A4' : 'Verification of Value (VV)',
		'Correct' : 'A1',
		'Response' : 'VA loans are 100% of the purchase price or CRV, whichever is lower.  The appraiser\'s job is to determine if the agreed upon purchase price is, indeed, a reasonable value and adequate security for the loan.'
	},
	
	{
		'Q' : 'If a lender was concerned that interest rates might be getting lower in the future, and it wanted to discourage borrowers from refinancing, what clause would it put in the loan documents?',
		'A1' : 'Prepayment penalty clause',
		'A2' : 'Escalation clause',
		'A3' : 'Waste clause',
		'A4' : 'Defeasance clause',
		'Correct' : 'A1',
		'Response' : 'The prepayment penalty clause dictates a money payment of some kind if the loan is paid off early.  A refinance is a new loan which pays off the old.  Escalation clauses specify increases in the monthly payments.  Waste is when the owner allows the property to deteriorate and depreciate in value, and defeasance is calling for the lender to reconvey its interest when the loan is paid off.'
	},
	
	{
		'Q' : 'K sold a mortgage at a discount in the:',
		'A1' : 'Secondary money market',
		'A2' : 'Primary money market',
		'A3' : 'Federal reserve market',
		'A4' : 'Private mortgage market',
		'Correct' : 'A1',
		'Response' : 'The primary money market originates or creates loans.  The secondary money market purchases loans, often at a discount.  The other two possible answers are not money markets at all.'
	},
	
	{
		'Q' : 'A section contains:',
		'A1' : '640 acres',
		'A2' : '5,280 feet',
		'A3' : '36 square miles',
		'A4' : '43,560 square feet',
		'Correct' : 'A1',
		'Response' : 'A section contains 640 acres, it being one mile by one mile.  There are 36 sections in a township, 43,560 square feet in an acre, and 5,280 linear feet in a mile.'
	},
	
	{
		'Q' : 'In measuring a lot, one of the corners has to be designated as the place to start.  This corner is called the:',
		'A1' : 'Point of beginning',
		'A2' : 'Start corner',
		'A3' : 'Principal marker',
		'A4' : 'First point of measure',
		'Correct' : 'A1',
		'Response' : 'This is just a matter of fact.  It is called the point of beginning.'
	},
	
	{
		'Q' : 'Which of the following is the beginning point for the government survey or rectangular survey method?',
		'A1' : 'Base and meridian',
		'A2' : 'Point of beginning',
		'A3' : 'Township',
		'A4' : 'Tiers',
		'Correct' : 'A1',
		'Response' : 'The baseline runs horizontally, the meridian vertically to form a point, like the cross hairs in a rifle site.  The center, crossing point is the beginning of measuring outward anywhere in the state to find a parcel of property.  Point of beginning is the beginning point for Metes and Bounds.  Township is a 36 square mile area, and tiers are the rows of townships stretching side to side, horizontally in the rectangular survey method.'
	},
	
	{
		'Q' : 'Mike has a three-year lease.  During the second year, Mike assigns the remaining term of the lease to Sam.  Which of the following is true.',
		'A1' : 'If Sam defaults, Mike will have to pay the rent.',
		'A2' : 'Sam is now out of the loop and has no more liability.',
		'A3' : 'Mike is now out of the loop and has no more liability.',
		'A4' : 'Mike cannot assign the lease.',
		'Correct' : 'A1',
		'Response' : 'Unless the original lease states that the lease is not assignable, then it is assignable, as was the case in this question.  However, since an assignment is done without the permission of the other party (the lessor in this example) Mike, the lessee, retains secondary, or underlying, liability for the terms of the lease.  So, if Sam defaults, Mike is on the hot seat!'
	},
	
	{
		'Q' : 'If a lessee uses the natural resources available on the land, such as water, berries, and firewood, the tenant would be considered to be exercising the right of:',
		'A1' : 'estovers',
		'A2' : 'retainer',
		'A3' : 'alienation',
		'A4' : 'estoppel',
		'Correct' : 'A1',
		'Response' : 'This is a good description and example of the right of estovers.  Estoppel is a legal term having to do with evidence and has no application here.  Alienation is a term for separation from title, as when you sell a property.'
	},
	
	{
		'Q' : 'The tenants in the business complex make their rent payments each month and the landlord pays all the expenses associated with the property.  Which best describes this arrangement?',
		'A1' : 'Gross lease',
		'A2' : 'Net lease',
		'A3' : 'Ground lease',
		'A4' : 'Rooftop lease',
		'Correct' : 'A1',
		'Response' : 'You should only consider gross or net lease.  You have to look through the landlord\'s eyes.  In this case, the amount the landlord collects is gross, because expenses will be deducted and what\'s left will be his net.  So that\'s really gross!  With a ground lease, land is rented and the tenant builds the improvements.  A rooftop is just what it sounds like - rent a portion of or the whole rooftop.'
	},
	
	{
		'Q' : 'An agent is protected from the seller and buyer waiting until the listing expires to reach an agreement and get around the commission by which clause:',
		'A1' : 'Safety clause',
		'A2' : 'Exclusivity clause',
		'A3' : 'Option clause',
		'A4' : 'Procuring clause',
		'Correct' : 'A1',
		'Response' : 'The safety clause says the seller will pay a commission on all deals made with someone introduced to the property during the listing for a specified period of time after the listing expires.  However, if the seller lists with another real estate company after the expiration of the first listing, the new listing brokerage would collect the commission.'
	},
	
	{
		'Q' : 'The process of giving something as collateral for a loan without giving up possession is:',
		'A1' : 'Hypothecation',
		'A2' : 'Pledge',
		'A3' : 'Title',
		'A4' : 'Deed',
		'Correct' : 'A1',
		'Response' : 'Hypothecation is the process of giving something as security for a loan and then keeping possession of it.  Two examples are your home loan and your car loan.  If you had to give up possession, such as in a pawn shop, then it would be a pledge rather than hypothecation.  Title is the abstract term for ownership, and deed is the document that verifies and conveys title.'
	},
	
	{
		'Q' : 'When foreclosure proceedings under a mortgage are initiated against a property, which of the following must also be recorded against the property?',
		'A1' : 'Lis pendens',
		'A2' : 'Mechanic\'s lien',
		'A3' : 'Sheriff\'s lien',
		'A4' : 'Complaint',
		'Correct' : 'A1',
		'Response' : 'The lis pendens is recorded against title at the county recorder\'s office giving notice to any potential purchaser that there is a foreclosure action pending against the property.  The complaint is filed with the court to initiate the foreclosure process.  A mechanic\'s lien is appropriate upon default when someone has integrated work or materials into the property.'
	},
	
	{
		'Q' : 'In foreclosure under a trust deed, after the Notice of Default is filed, how long does the defaulting borrower have to reinstate the loan?',
		'A1' : 'Three months',
		'A2' : 'Six months',
		'A3' : 'Thirty days',
		'A4' : 'Ninety days',
		'Correct' : 'A1',
		'Response' : 'Three months and then the one-month advertising period begins.  With the lenders agreement, the seller could still sell the house during that fourth month.  The only other "real" time frame here is the six months.  In a mortgage foreclosure, after the sale is over, there is a six month statutory period of redemption.'
	},
	
	{
		'Q' : 'An option is considered to be which of the following types of contracts?',
		'A1' : 'It is unilateral until it is exercised, at which time it becomes bilateral, since it is a sales contract.',
		'A2' : 'It is bilateral until it is exercised, at which time it becomes unilateral.',
		'A3' : 'It is unilateral both before and after it is exercised.',
		'A4' : 'It is bilateral both before and after it is exercised.',
		'Correct' : 'A1',
		'Response' : 'An option is unilateral, until it is exercised.  Once the optionee says he/she wants to use his/her right to buy the property, the option contract becomes a purchase contract, which is clearly a bilateral contract.'
	},
	
	{
		'Q' : 'The word or phrase that most accurately describes the word "Freehold" is:',
		'A1' : 'Ownership',
		'A2' : 'Pur Autre Vie',
		'A3' : 'Owning free and clear',
		'A4' : 'Life Estate',
		'Correct' : 'A1',
		'Response' : 'Freehold means ownership, but does not necessarily mean it\'s free and clear.  Pur autre vie has to do with a life estates which is based on a life other than the holder.  Life estate gives the right to act as if you are the owner for the term of your life.'
	},
	
	{
		'Q' : 'A little known fact about joint tenancy is that:',
		'A1' : 'Joint tenants cannot own unequal shares of the property.',
		'A2' : 'One joint tenant cannot sell his interest in the property without the approval of the other joint tenants.',
		'A3' : 'Joint tenancy applies only to husband and wife.',
		'A4' : 'Joint tenancy avoids probate only if the deceased has no will.',
		'Correct' : 'A1',
		'Response' : 'Joint tenants can sell their interest without the approval of other owners.  Joint tenancy is often used by husband and wife, but is not restricted to married people.  Joint tenancy avoids probate regardless of whether there is a will or not.  So, the answer is that regardless of what the financial or other arrangement was made when the property was acquired, in joint tenancy each owner owns equal shares with the other owners and can sell their own interest without permission of the others.'
	},
	
	{
		'Q' : 'In a community property state:',
		'A1' : 'regardless of what form of ownership is used when purchasing real property',
		'A2' : 'a spouse has a right of ownership in the other spouse\'s property if it is purchased during the marriage.',
		'A3' : 'separate property can be obtained during the marriage only if title is taken by one spouse, in severalty, as sole owner.',
		'A4' : 'property can be owned by just one spouse if the purchasing spouse names his/her husband/wife as the beneficiary of the property in a properly executed will.',
		'Correct' : 'A1',
		'Response' : 'there is no way a spouse can have an interest in property obtained during the marriage, all property must be owned as separate property by one spouse or the other.	Community property states require that all property acquired during a marriage be the property of both the husband and wife.  Separate property can only be acquired during the marriage through gift or inheritance.  Property owned previous to the marriage remains separate property, and property acquired after the marriage ends is separate property.'
	},
	
	{
		'Q' : 'Which of the following terms is NOT relevant to the concept of adverse possession?',
		'A1' : 'Defeasible fee',
		'A2' : 'Color of title',
		'A3' : 'Tacking',
		'A4' : ' Quiet title action',
		'Correct' : 'A1',
		'Response' : 'Defeasible fee indicates the owner\'s rights have some conditions attached.  Tacking is two or more persons tacking their adverse possession steps together to add up to the required time period; quiet title action is the court action to get the ownership changed to the name of the adverse possessor; and that is done under the color (or appearance) of title.'
	},
	
	{
		'Q' : 'An owner has three horses.  During his ownership the zoning changed from agricultural to residential and horses are no longer allowed.  This owner is legally able to keep his horses.  The right to keep the horses is called a(n):',
		'A1' : 'Legal non-conforming use',
		'A2' : 'Legal conforming use',
		'A3' : 'Variance',
		'A4' : 'Spot Zoning',
		'Correct' : 'A1',
		'Response' : 'It is called a legal non-conforming use and is sometimes referred to "grand fathering."  The zoning remains in it\'s changed classification.  A variance is a granted non-conforming use.  With spot zoning the zoning classification is actually changed on the one lot.'
	},
	
	{
		'Q' : 'Mr. Little has an easement on Mr. Biggs\' property in the form of a right of way.  Mr. Little would be considered the:',
		'A1' : 'Dominant tenement',
		'A2' : 'Tenement supreme',
		'A3' : 'Servient tenement',
		'A4' : 'Tenement in gross',
		'Correct' : 'A1',
		'Response' : 'Being the person who has the legal right to cross Biggs\' property makes Little the dominant tenement and Biggs the servient tenement.'
	},
	
	{
		'Q' : 'The county took the property of Mr. Wink by eminent domain so they could build a highway through the area.  When they dug down and laid the base for the highway they stopped an underground water flow that rendered Mr. Blink\'s property useless for farming.  This is a situation where Mr. Blink might want to sue the county for:',
		'A1' : 'inverse condemnation',
		'A2' : 'eminent domain',
		'A3' : 'unlawful detainer',
		'A4' : 'defeasance',
		'Correct' : 'A1',
		'Response' : 'What Mr. Blink would want is for the county to buy his property even though they don\'t need it for highway.  This suit would be a suit for inverse condemnation.  Since his property has been severely damaged, he has a reasonable chance to win.'
	},
	
	{
		'Q' : 'Which of the following is NOT a test of a fixture?',
		'A1' : 'The cost of the item',
		'A2' : 'The intention grantor',
		'A3' : 'How the item was attached',
		'A4' : 'The agreement of the parties',
		'Correct' : 'A1',
		'Response' : 'Cost is not a factor.  However, there are four tests.  The one missing is how is the item was adapted to the property.'
	},
	
	{
		'Q' : 'Crops which have been nurtured in the year of the transfer are considered:',
		'A1' : 'emblements',
		'A2' : 'trade fixtures',
		'A3' : 'appurtenant',
		'A4' : 'severance',
		'Correct' : 'A1',
		'Response' : 'That is the definition of an emblement.  Therefore, if an apple orchard were sold in mid-summer, the trees would go to the buyer while the apples would remain the property of the seller unless other contractual arrangements were made.  The trees are real property and the emblements (apples) personal property.  Trade fixtures are attached to the business, appurtenant is attached to the land or the deed, and severance is severing real property from the land, thereby turning it into personal property.'
	},
	
	{
		'Q' : 'A barber\'s chair in a barber shop would be considered:',
		'A1' : 'a trade fixture',
		'A2' : 'emblement',
		'A3' : 'alluvion',
		'A4' : 'a fixture',
		'Correct' : 'A1',
		'Response' : 'Alluvion has to do with water and an emblement is a crop.  The barber chair is likely bolted to the floor, but legally it is attached to the barber business rather than to the floor and thus would be considered a trade fixture and personal property.'
	},
	
	{
		'Q' : 'An important characteristic of land is that it can be improved.  These modifications become a part of and tend to increase the value of the real property.  Which of the following is such a modification?',
		'A1' : 'Access roads',
		'A2' : 'Crops',
		'A3' : 'Trade fixtures',
		'A4' : 'Chattels',
		'Correct' : 'A1',
		'Response' : 'Chattels, crops (emblements), and trade fixtures are each an example of personal property.  Access roads are real property and as such pass from grantor to grantee with the deed.'
	},
	
	{
		'Q' : 'Which of the following would reflect the true bottom line to the owner?',
		'A1' : 'Cash flow',
		'A2' : 'Net operating income',
		'A3' : 'Adjusted gross income',
		'A4' : 'Gross income',
		'Correct' : 'A1',
		'Response' : 'The gross income is all the monies collected.  Net operating income is the figure after expenses are deducted.  Debt service would be deducted next to result in the owner\'s cash flow before taxes.  Adjusted gross income is a personal income tax term.'
	},
	
	{
		'Q' : 'When a security or cleaning deposit is not returned to the tenant, the owner or property manager must:',
		'A1' : 'send notification and explanation to the tenant within 30 days.',
		'A2' : 'immediately transfer the money to the operating account.',
		'A3' : 'send notification and reasons to the Utah Real Estate Division.',
		'A4' : 'do nothing, since the tenant already knows why they aren\'t getting it back.',
		'Correct' : 'A1',
		'Response' : 'Even if it\'s obvious - the tenant trashed the place - there still must be an accounting, and the owner can only keep the actual amount used to take care of the damages or cleaning.'
	},
	
	{
		'Q' : 'Property C is appraised at $314,000.  The assessed rate is 28% and the tax rate is $64.72 per $1,000.  How much is the property tax due?',
		'A1' : '$5,690.18',
		'A2' : '$1,358.47',
		'A3' : '$4,851.67',
		'A4' : '$8,792.00',
		'Correct' : 'A1',
		'Response' : 'The computation is:  $314,000 X 28% = $87,920 ˜ 1,000 = 87.92 X $64.72 = $5,690.18.  The formula is: Appraised value X Assessed rate ˜ 1,000 (to determine the number of units of 1,000) X Tax rate = Tax Due'
	},
	
	{
		'Q' : 'Property taxes are a debt of whom?',
		'A1' : 'The property itself',
		'A2' : 'The owner of record',
		'A3' : 'The current resident',
		'A4' : 'The borrower and lender',
		'Correct' : 'A1',
		'Response' : 'The property taxes are actually a debt of the property, strange as it may seem.  However, if they don\'t get paid, the property can be sold at a tax sale after the statutory period of time.  So, if the owner doesn\'t want to lose the property, the owner takes care of payment!'
	},
	
	{
		'Q' : 'The main purpose of a settlement statement is to:',
		'A1' : 'Account for all monies involved in the transaction.',
		'A2' : 'Reconcile the trust account for the closing of the transaction.',
		'A3' : 'Identify the form of funds the buyer needs to bring to close.',
		'A4' : 'Make sure the prorations are done accurately.',
		'Correct' : 'A1',
		'Response' : 'The trust account is the broker\'s and has no relation to the transaction between buyer and seller.  The settlement statement will hopefully show the prorations correctly, and the buyer will have been told in what forms the funds must be provided, i.e. certified check, but those are not purposes of the settlement statement.  All monies involved in the transaction, regardless of when paid, or by whom, must be accounted for accurately.  That is the purpose of the closing or settlement statement.'
	},
	
	{
		'Q' : 'Which of the following would NOT get $500,000 in exempt amount from income taxes upon selling a primary residence?',
		'A1' : 'A married couple filing jointly who lived there 20 years and then rented it out for four years.',
		'A2' : 'A man and woman living together in a home for three years, who each owned half.',
		'A3' : 'A married couple, both over 55, who filed jointly and owned and lived in it the last three years.',
		'A4' : 'Two spinster sisters who owned and lived in the home for 11 years, after inheriting it from their parents.',
		'Correct' : 'A1',
		'Response' : 'Requirements for the $500,000 exemption are: a married couple, filing jointly, both lived in the property for three of the last five years, and at least one of them owned it for three of the last five years.  Since the married couple who lived there 20 years did not live in it for three, they don\'t qualify.  The age 55 is no longer relevant.  The sisters and unmarried man and woman would each get $250,000, thus still coming out to $500,000.'
	},
	
	{
		'Q' : 'Which of the following cannot be depreciated, regardless of the circumstance?',
		'A1' : 'personal residence and land',
		'A2' : 'personal property',
		'A3' : 'investment property',
		'A4' : 'commercial property',
		'Correct' : 'A1',
		'Response' : 'Your home and bare land can never be depreciated.  All the others can.'
	},
	
	{
		'Q' : 'Which of the following is NOT a true statement about discount points and income taxes if the seller paid the points for the buyer?',
		'A1' : 'Since the seller paid them, only the seller can deduct them.',
		'A2' : 'Buyer deducts them; they are a cost of sale to the seller.',
		'A3' : 'Both buyer and seller will get a tax benefit from the points.',
		'A4' : 'The points will be deducted on taxes filed in the year following the sale.',
		'Correct' : 'A1',
		'Response' : 'The right answer is right because it is not a true statement, and this is a NOT question.  Both buyer and seller get a tax benefit with the seller pays the points.  The buyer gets them the year after the purchase, when taxes are filed, by taking it as a deduction.  The seller benefits when computing capital gains on their sale.  Paying points or other costs for the buyer are considered a cost of sale, which will then lower the seller\'s capital gains (or profit).'
	},
	
	{
		'Q' : 'The buyers moved in, and the last box was unpacked.  They were surprised when a knock on the door revealed someone holding a 49 year lease with 40 years to go and demanded the new owners vacate the premises.  What\'s more, the lessee insisted that this long-term lease had been duly recorded nine years ago.  Sure enough, it was on the records.  The title company would have to take care of this in the buyers\' interest due to the principle of:',
		'A1' : 'Subrogation',
		'A2' : 'Abrogation',
		'A3' : 'Subordination',
		'A4' : 'Substitution',
		'Correct' : 'A1',
		'Response' : 'Subrogation applies to all insurance situations.  It means substituting the insurance company, in this case the title insurance company, to take the liability and/or exercise the rights of the insured (the buyer).  Abrogation is a contract law principle, and in real estate indicates the settlement documents abrogate or replace the purchase contract.  Subordination is a loan principle having to do with priority.  Substitution is an appraisal principle stating no one will pay more than they have to get what they want.'
	}
);

//General 2
questions[1] = new Array(

	{
		'Q' : 'Howard and Betty Evers listed their home with Mac Miller, a sales agent.  This makes Mac\'s principal broker the:',
		'A1' : 'listing agent',
		'A2' : 'selling agent',
		'A3' : 'selling subagent',
		'A4' : 'listing subagent',
		'Correct' : 'A1',
		'response' : 'In their relationship to clients, sales agents are always sub agents and the contracting broker is always the agent.  (A sales agent or associate broker is only an agent to their employing principal broker.)  A cooperating broker in a different brokerage could also be considered a sub agent.  The term "selling" agent does not mean the agent representing the seller . . . that would be the listing agent.  The selling agent brought the buyer to the deal and made the sale happen.'
	},
	
	{
		'Q' : 'Under a listing contract, the buyer is considered a:',
		'A1' : 'customer',
		'A2' : 'principal',
		'A3' : 'agent',
		'A4' : 'client',
		'Correct' : 'A1',
		'response' : 'the seller is the principal in this situation and the buyer would be considered the customer.  Client is a word customarily used for the principal.  The listing broker is the agent'
	},
	
	{
		'Q' : 'Mr. Zingle listed his property with Jane Jacoby, the broker of Jacob and Jacoby REALTORSÆ.  He instructed Jacoby that he would offer subagency to no one except the agents of Jacob & Jacoby REALTORSÆ.  What agency does this create?',
		'A1' : 'Jacoby is the agent, all her licensees are subagents; all others are buyer agents.',
		'A2' : 'Jacoby and her licensees are agents; other agents are subagents.',
		'A3' : 'Jacoby and her licensees are agents; other agents are buyer agents.',
		'A4' : 'Jacoby is the agent; all others are subagents.',
		'Correct' : 'A1',
		'response' : 'this is a clear case of agency and sub agency in the office which listed the property, and no agency beyond that so far as the listing is concerned.  When the listing is published across the MLS it will be noted "No Subagency."  Any other real estate sales persons would either be agents of the buyer, or have no agency at all.'
	},
	
	{
		'Q' : 'Which of the following is NOT a requirement for a valid appraisal?',
		'A1' : 'A designation from an appraisal professional organization, such as MAI',
		'A2' : 'signature of the appraiser',
		'A3' : 'An estimate of value',
		'A4' : 'A description of the property',
		'Correct' : 'A1',
		'response' : 'there are four essential parts of an appraisal.  They are:  date, property description, estimate of value, and signature of the appraiser.  Though the appraiser has to be approved by the state, they do not have to have designations from their professional organizations.'
	},
	
	{
		'Q' : 'Which of the following is NOT true of amenities?',
		'A1' : 'they are found only on residential properties.',
		'A2' : 'they may be internal to the property.',
		'A3' : 'What is an amenity to one person may not be an amenity to another.',
		'A4' : 'they may be located outside the property boundaries.',
		'Correct' : 'A1',
		'response' : 'the word that makes this a "NOT," is "only".  Though amenities are found on residential properties, they also may be found on all other types of properties as well.  An amenity is a personal pleasure item that adds value to the property and can be found inside or outside the boundaries and may be either tangible or intangible.'
	},
	
	{
		'Q' : 'A property which is overpriced, due to an emotional attachment because the owner built the house, is an example of:',
		'A1' : 'value in use',
		'A2' : 'fair market value',
		'A3' : 'value in exchange',
		'A4' : 'value in distortion',
		'Correct' : 'A1',
		'response' : 'Value in use is a subjective view of value.  Though the owner sees special value in the fact that he built it, prospective buyers may not see anything significant in that fact.  On the other hand, the reputation of the builder may add to the value.  Value in exchange is more objective and is more concerned with the cold hard facts that create value in one property compared to another similar one.  Fair market value is a willing buyer, willing seller, neither under duress and sufficient time on the market.'
	},
	
	{
		'Q' : 'the value of a property that is downwind from a slaughter house might be affected in which way?',
		'A1' : 'Economic obsolescence',
		'A2' : 'Functional obsolescence',
		'A3' : 'Physical deterioration',
		'A4' : 'It could increase the value because the owners can buy meat cheap.',
		'Correct' : 'A1',
		'response' : 'the slaughter house is outside the boundaries and therefore would be considered external or economic obsolescence.  Functional obsolescence is when something works fine, but no one wants it.'
	},
	
	{
		'Q' : 'Fair market value is determined by each of the following factors EXCEPT:',
		'A1' : 'Appraiser\'s personal opinion',
		'A2' : 'sufficient time on the market',
		'A3' : 'Willing buyer',
		'A4' : 'Willing seller',
		'Correct' : 'A1',
		'response' : 'there are four factors.  The missing one is that the sale of comparable properties must have been free from duress.  The personal opinion of the appraiser is not important.  His/her professional, best estimate is.'
	},
	
	{
		'Q' : 'Which of the following is NOT required for a contract to be valid?',
		'A1' : 'All parties have a lawyer.',
		'A2' : 'All parties agree to the contract.',
		'A3' : 'All parties are competent.',
		'A4' : 'All parties have given consideration.',
		'Correct' : 'A1',
		'response' : 'the essential elements of mutual agreement, capacity, and consideration are all present in the choices.  The missing essential element is that the contract must be for a legal purpose.  One doesn\'t have to have a lawyer to make the contract valid.'
	},
	
	{
		'Q' : 'If a seller is hiding defects in the property from the buyer:',
		'A1' : 'he/she would not be protected by an "as is" clause.',
		'A2' : 'he/she would be protected by an "as is" clause.',
		'A3' : 'he/she could be protected by an "exceptions and exclusions" clause.',
		'A4' : 'he/she could be protected by a "contingency" clause.',
		'Correct' : 'A1',
		'response' : 'Nothing in a clause can protect against fraud.  The purpose of an "as is" clause is to allow the buyer to know that they are buying a property with its revealed defects and other possible defects the seller does not know about. Hiding defects is one thing, not knowing about them is quite another.'
	},
	
	{
		'Q' : 'In a contract, "time is of the essence" means:',
		'A1' : 'all dates are firm and must be met.',
		'A2' : 'ASAP (as soon as possible).',
		'A3' : 'time is more important than money.',
		'A4' : 'that wages will be paid by the hour.',
		'Correct' : 'A1',
		'response' : 'time is of the essence does not mean anyone has to hurry, but only that they have to meet the agreed upon dates.  If that is a problem, through an addendum, they may extend the date.  If an agreed to date is not met, it could create a voidable contract.'
	},
	
	{
		'Q' : 'Once a contract is in default, the injured party has a time period during which they must bring suit or lose the right to sue.  This time period, which varies according to the type of contract, is called:',
		'A1' : 'statute of limitations.',
		'A2' : 'statute of frauds.',
		'A3' : 'time is of the essence.',
		'A4' : 'rule of parol evidence.',
		'Correct' : 'A1',
		'response' : 'since it limits the time to act, it is called the statute of limitations.  The statute of frauds states certain contracts must be in writing, with no concern for time.  Time is of the essence means that all contracted dates must be observed, and the rule of parol evidence means verbal agreements do not affect the written contract or agreement.'
	},
	
	{
		'Q' : 'the most common use of a quit claim deed is to:',
		'A1' : 'remove clouds from the title.',
		'A2' : 'pass full title with all warranties to the grantee in a quick and timely manner.',
		'A3' : 'pass title from the government to a private individual.',
		'A4' : 'quit claim to all ownership and all liability for loans and other encumbrances on the title.',
		'Correct' : 'A1',
		'response' : 'removing clouds is the process of someone giving up their interest in or claim to a property.  Sometimes it is an interest they don\'t actually hold, it just appears they do.  Since the quit claim deed gives no guarantees, it is ideal for this purpose.  The government uses patents, and a general warranty deed gives the full complement of guarantees and warranties.'
	},
	
	{
		'Q' : 'A handwritten will is:',
		'A1' : 'a holographic will.',
		'A2' : 'a nuncupative will.',
		'A3' : 'a bequest.',
		'A4' : 'invalid.',
		'Correct' : 'A1',
		'response' : 'A holographic will must be written entirely in the handwriting of the testator, and if properly done, is valid.  A nuncupative will is an oral will and can only pass personal property.  However, it should be written by a non-beneficiary and witnessed.  A bequest is a gift of personal property given in a will, and may also be known as a legacy. '
	},
	
	{
		'Q' : 'Under the 1968 fair housing laws, which of the following is not one of the protected classes:',
		'A1' : 'Age',
		'A2' : 'Race',
		'A3' : 'sex',
		'A4' : 'Color',
		'Correct' : 'A1',
		'response' : 'though age is now a protected class, that protection did not come until later.  However, race, gender, color, religion, and national origin were all mentioned in 1968.'
	},
	
	{
		'Q' : 'the Uniform Commercial Code (UCC) is:',
		'A1' : 'the federal code that applies when selling personal property, such as a business.',
		'A2' : 'the code with the little bars for scanning at the supermarket.',
		'A3' : 'the code that ties the product to a specific commercial on TV.',
		'A4' : 'the federal code that governs whether a business can be sold.',
		'Correct' : 'A1',
		'response' : 'UCC was created for the express purpose of regulating the purchase and sale of personal property, such as the inventory and equipment of a business.  It has nothing to do with the sale or purchase of real estate or the other possibilities mentioned in the question.'
	},
	
	{
		'Q' : 'the practice of getting people to sell their homes at bargain prices by suggesting that certain ethnic groups are going to move into the area is nicknamed:',
		'A1' : 'blockbusting',
		'A2' : 'steering',
		'A3' : 'price fixing',
		'A4' : 'redlining',
		'Correct' : 'A1',
		'response' : 'this is blockbusting, or "panic peddling" as it is sometimes called.  Steering is a discriminatory practice usually done by real estate agents who are directing clients to or away from certain geographical areas,  redlining is an illegal practice by lenders, and price fixing is illegally manipulating prices for services and products such as real estate commissions.'
	},
	
	{
		'Q' : 'What is the name of the law designed to protect consumers from unscrupulous developers who market real property opportunities across state lines?',
		'A1' : 'Interstate Land Sales Full Disclosure Act',
		'A2' : 'Land Sales Practices Act',
		'A3' : 'Interstate Commerce Disclosure Act',
		'A4' : 'Full Real Estate Sales Disclosure Act',
		'Correct' : 'A1',
		'response' : 'the Land Sales Prractices Act is a real law, but only applies to the state of Utah.  The other two are made up names.'
	},
	
	{
		'Q' : 'Which of the following options would permanently lower the interest on a long-term loan?',
		'A1' : 'Discount points	2-1 buy down',
		'A2' : 'Mortgage insurance',
		'A3' : 'the purpose of paying discount points is to lower the interest rate.',
		'A4' : 'subordinating the loan',
		'Correct' : 'A1',
		'response' : 'A 2-1 buy down accomplishes the same thing, on a short term basis, to help people get the loan with an initial low interest rate.  Mortgage insurance protects the lender in case of default, and subordination has to do with the priority of loans.'
	},
	
	{
		'Q' : 'When the beneficiary makes payments to the trustor, the loan is a:',
		'A1' : 'reverse annuity mortgage',
		'A2' : 'Wraparound mortgage',
		'A3' : 'Negatively amortized mortgage',
		'A4' : 'Blanket mortgage',
		'Correct' : 'A1',
		'response' : 'the beneficiary (lender) makes payments to the trustor (borrower) when the loan is a reverse annuity mortgage.  Elderly people might use one of these loans when their home is paid off and they want to take money out of the value of the home without selling it.  A wraparound is a new loan incorporating an existing one, a blanket mortgage uses two or more parcels of land as security, and a negatively amortized mortgage is one where the balance gets larger each month, not lower.'
	},
	
	{
		'Q' : 'Mr. Boles went to Last Chance Mortgage Company and obtained a loan.  This loan originated in the:',
		'A1' : 'Primary money or mortgage market',
		'A2' : 'secondary money or mortgage market',
		'A3' : 'Federal reserve	FNMA or Federal National Mortgage Association',
		'A4' : 'Loans are created in the primary money market.',
		'Correct' : 'A1',
		'response' : 'Existing loans are sold in the secondary money market.  The Federal Reserve neither originates, nor buys, or sells loans.  However, it controls the flow of money in America.  FNMA is an example of a secondary money market entity, since it purchases existing loans.'
	},
	
	{
		'Q' : 'M has a loan on which he makes payments of interest only.  At the end of the loan M must pay off the principal in a single payment.  This loan is an example of a:',
		'A1' : 'straight loan',
		'A2' : 'reverse annuity mortgage',
		'A3' : 'Package mortgage',
		'A4' : 'Partially amortized mortgage',
		'Correct' : 'A1',
		'response' : 'straight or term loans are often called interest only loans, meaning that the payment consists of interest only.  All the principal remains in place, so the loan could continue forever if the borrower doesn\'t make an arrangement to pay off the loan (assuming the lender would allow this).  The time for payment of the principal is determined from the outset.  Reverse annuity mortgage is when the mortgagee makes regular monthly payments to the mortgagor (lender to borrower).  Package mortgage is both real and personal property as collateral, and partially amortized is payments of principal and interest, but the loan is not retired by the end of its term.'
	},
	
	{
		'Q' : 'Degrees are used in which of the following?',
		'A1' : 'Metes and Bounds',
		'A2' : 'rectangular Survey',
		'A3' : 'Informal land descriptions',
		'A4' : 'Lot, Block, and Plat',
		'Correct' : 'A1',
		'response' : 'Degrees and angles are only used in the metes and bounds method of describing land.  The rectangular survey uses tiers, ranges, townships, sections and fractions of sections.  Lot, block, and plat uses alpha-numeric names for individual parcels which are in blocks which are in subdivisions.  Informal land descriptions, such as addresses, are not considered legal descriptions.'
	},
	
	{
		'Q' : 'the point of beginning is used primarily in which method of land description?',
		'A1' : 'Metes and bounds',
		'A2' : 'Lot, Block, and Plat',
		'A3' : 'Informal descriptions',
		'A4' : 'rectangular Survey',
		'Correct' : 'A1',
		'response' : 'In Lot, Block, and Plat or Rectangular Survey, there is no need for a point of beginning.  But with the use of angles and degrees, the surveyor needs to know where to begin and those who follow must know where he began or the description would not work.'
	},
	
	{
		'Q' : 'Henry, the owner, negotiates a three-year lease with Sally, the lessee.  Six months later he sells the property to Tom.  What would happen to the lease in this case?',
		'A1' : 'the lease continues to run and Tom and Sally are obligated to the lease until it expires.',
		'A2' : 'sally must renegotiate a new lease with Tom or move out.',
		'A3' : 'Henry cannot legally sell the property to Tom until the lease expires.',
		'A4' : 'the lease would only be good for the remainder of the year in which the sale is completed.',
		'Correct' : 'A1',
		'response' : 'the sale would be made subject to the terms of the lease.  The only thing the sale would change in the lease is the name of the lessor, which now would be Tom rather than Henry.  Both Tom and Sally must act according to the original terms of the lease, unless negotiated otherwise by agreement of Tom and Sally.'
	},
	
	{
		'Q' : 'Buy More for Less, a local general store, leases the building where they operate.  They pay a flat rental fee of $2,300 plus 2% of any gross income in excess of $250,000.  This is what kind of lease:',
		'A1' : 'Percentage lease',
		'A2' : 'Participation lease',
		'A3' : 'Graduated payment lease',
		'A4' : 'Vertical lease',
		'Correct' : 'A1',
		'response' : 'there are many forms of a percentage lease.  This is one of them.  Graduated payment leases have an escalation clause that prescribes a predetermined increase in rents.  There is no such thing as a participation lease, though there is a participation clause that is often found in leases.  A vertical lease would be used for leasing air rights or mineral rights.'
	},
	
	{
		'Q' : 'A seller needed to retain possession of the property for a while after the closing of the sale.  The buyer agreed, and they established a daily rent.  However, they also agreed that either could terminate the lease at any time.  In this case, the seller, now the lessee, would be considered to have:',
		'A1' : 'tenancy at will.',
		'A2' : 'periodic tenancy.',
		'A3' : 'tenancy for years.',
		'A4' : 'no tenancy at all.',
		'Correct' : 'A1',
		'response' : 'the seller definitely has tenancy.  Because the agreement has no termination date, it can\'t be tenancy for years.  Because it is not going to automatically renew after a stated period of time, it is considered tenancy at will.  The key here is that the lease can be terminated any time without advance or prescribed notice.  Some states require a short period of notice.'
	},
	
	{
		'Q' : 'the Joneses sold their home, but the new house wasn\'t completed by the time they closed (what else is new!).  The buyers agreed that they could stay till the home was finished and pay rent.  This is called:',
		'A1' : 'sale/Leaseback',
		'A2' : 'License interest',
		'A3' : 'Non disturbance clause',
		'A4' : 'Periodic tenancy',
		'Correct' : 'A1',
		'response' : 'the Joneses sold the property, stayed in it and leased it back.  A license interest is a personal privilege, temporary and revocable.  A non-disturbance clause is in the owner\'s loan documents and protects the interests of the tenants in case of a foreclosure.  Periodic tenancy is automatically renewed with the payment and receipt of rent.'
	},
	
	{
		'Q' : 'Which of the following types of listings gives the greatest protection to the agent:',
		'A1' : 'Exclusive right-to-sell',
		'A2' : 'Exclusive agency',
		'A3' : 'Open listing',
		'A4' : 'Net listing',
		'Correct' : 'A1',
		'response' : 'An exclusive right to sell ensures that if the property is sold during the term of the listing, the listing agent will receive the listing portion of the commission regardless of who found the buyer.  With an open listing, only the selling office will get a commission - no splits.  A net listing is illegal.'
	},
	
	{
		'Q' : 'If the borrowers are required to sell their property when default happens, in order to pay back the loan, they live in what type of state?',
		'A1' : 'Lien theory',
		'A2' : 'Intermediate theory',
		'A3' : 'title theory',
		'A4' : 'Deed theory',
		'Correct' : 'A1',
		'response' : 'this describes a lien theory state where the defaulting owners are forced to sell under foreclosure since they own the property, and the lender just has a lien.  Under title theory, the lender holds title until the loan is paid off.  Therefore, if default takes place the lender just repossess the property (and the owner forfeits it) and sells it to recover the debt.  Intermediate theory is used in just a few states and is obviously a blending of the two.  There is no such thing as deed theory.'
	},
	
	{
		'Q' : 'Most states are which of the following?',
		'A1' : 'Lien theory state',
		'A2' : 'title theory state',
		'A3' : 'Intermediate theory state',
		'A4' : 'Mortgage theory state',
		'Correct' : 'A1',
		'response' : 'there are only a small number of title theory states and even less use intermediate theory.  Mortgage theory does not exist.  Lien theory is very popular since the lender can only force a sale rather than repossess property and take all the equity that comes with it.'
	},
	
	{
		'Q' : 'In a foreclosure either under a mortgage or a trust deed, what is the time frame required by law for advertising the time and place of sale and a description of the property?',
		'A1' : 'Once a week for three consecutive weeks',
		'A2' : 'three times a week for four consecutive weeks',
		'A3' : 'A month, at least once a week',
		'A4' : 'there is no legal requirement; it\'s usually three weeks',
		'Correct' : 'A1',
		'response' : 'there is one right answer here, and it\'s specified in the law.  It must be in a newspaper with general circulation in the county where the property is located.'
	},
	
	{
		'Q' : 'What does it mean when an option is "exercised."',
		'A1' : 'the optionee officially agrees to purchase the property.',
		'A2' : 'the optionor terminates the option.',
		'A3' : 'the optionor and optionee renegotiate the terms of the option.',
		'A4' : 'the optionee terminates the option.',
		'Correct' : 'A1',
		'response' : 'Exercising an option is when the optionee agrees to buy the property under the terms already agreed to, and the option contract becomes a purchase contract.'
	},
	
	{
		'Q' : 'John and Lucy Mason own their home together in such a manner that if one of them dies, the other will automatically own the entire property.  Therefore they own their property as:',
		'A1' : 'Joint Tenants',
		'A2' : 'Owners in Severalty',
		'A3' : 'tenants in Common',
		'A4' : 'tenants in Community Property',
		'Correct' : 'A1',
		'response' : 'severalty is ownership by just one person.  Tenants in common do not have the right of survivorship.  Community property is a form of ownership that exists in a few states and survivorship is not an issue.  This question makes it clear that each owner has the right of survivorship.  Thus, the answer could have been joint tenancy or tenancy by the entirety.  Since tenants by the entirety was not offered as a choice (it also has survivorship), the answer has to be joint tenants.'
	},
	
	{
		'Q' : 'A developer is told that if he wants to build his residential project, upon completion he will have to give the streets, curbs, and gutters to the city free of charge.  If the developer agrees, this would be an example of:',
		'A1' : 'statutory dedication on the part of the developer.',
		'A2' : 'adverse possession on the part of the city.',
		'A3' : 'voluntary dedication on the part of the developer',
		'A4' : 'common law application of the Marketable Record Title Act.',
		'Correct' : 'A1',
		'response' : 'Adverse possession has nothing to do with this situation, the Marketable Record Title Act has to do with clearing title of old liens and encumbrances, and though the developer voluntarily agrees to gift the property to the city, it is a matter of either doing it or not having the plat for the proposed subdivision approved.  So, since it is given for free but is required by the government it is called statutory dedication.'
	},
	
	{
		'Q' : 'A real estate sales agent, acting as a limited agent for both the buyer and seller, is handling a sale.  The buyers are husband and wife and don\'t know how to take title.  They know they have several choices but can\'t make up their minds.  They ask the agent what they should do.  They indicate that if one of them were to die, the survivor should own the property.  The agent should:',
		'A1' : 'suggest they seek the advice of an attorney and refuse to give an opinion.',
		'A2' : 'tell them they should be joint tenants.',
		'A3' : 'suggest tenancy in common, since it would also allow each of them to will their interest to their children.',
		'A4' : 'indicate that one of them should take title and will the property to the other.',
		'Correct' : 'A1',
		'response' : 'these folks are seeking legal counsel and that is exactly what they should be encouraged to get.  Real estate agents should not give legal advice regardless of how obvious the solution might seem.  Agents give knowledge, and the clients use that knowledge to make their own decisions.  In this case any of the other choices have some merit.  In addition, tenancy by the entirety is also a possibility, since it too offers full right of survivorship.'
	},
	
	{
		'Q' : 'Which of the following best describes someone involved in a business venture who\'s liability is limited to the amount invested?',
		'A1' : 'Limited partner',
		'A2' : 'Legal person',
		'A3' : 'Natural person',
		'A4' : 'Joint tenant',
		'Correct' : 'A1',
		'response' : 'the question describes a limited partner.  A legal person is a corporation, and a natural person is the opposite - just a regular person.  A joint tenant is a co-owner with rights of survivorship.'
	},
	
	{
		'Q' : 'When commercial development threatens to move close to a residential area and negatively affect the value of the homes, the planning and zoning commission might create a(n):',
		'A1' : 'Buffer zone',
		'A2' : 'Condemned area',
		'A3' : 'Variance',
		'A4' : 'setback line',
		'Correct' : 'A1',
		'response' : 'this is called a buffer zone.  It sometimes allows residential development in the area, but not commercial.  Sometimes it is used for safety purposes and nothing can be built there.  A condemned area applies in eminent domain and would be buildings to be torn down.  A setback line is the distance from the front of the property back to the improvement to be constructed.  A variance allows one to vary from zoning requirements.'
	},
	
	{
		'Q' : 'school children have been walking across Mr. Walker\'s vacant lot for  40 years or more.  When Mr. Walker begins to build on the lot in such a way that it would block the path of the children, the parents stop him claiming they have an easement by:',
		'A1' : 'Prescription',
		'A2' : 'Necessity',
		'A3' : 'Implication',
		'A4' : 'Mutual agreement',
		'Correct' : 'A1',
		'response' : 'this would be a prescriptive easement or easement by prescription.  The time period required to perfect an easement by prescription varies from state to state.  In this situation it might be that Mr. Walker would be required to put in sidewalks so the children could safely go to school before being allowed to build.'
	},
	
	{
		'Q' : 'since schools, hospitals, government buildings, churches and other such properties do not fit into any zoning classification, they are considered:',
		'A1' : 'special purpose properties.',
		'A2' : 'service properties',
		'A3' : 'Unique function properties',
		'A4' : 'Urban renewal properties',
		'Correct' : 'A1',
		'response' : 'these properties are called special purpose properties and are handled on a case by case basis to determine how they will fit into the over all master plan of the city.'
	},
	
	{
		'Q' : 'situs refers to which of the following?',
		'A1' : 'Location',
		'A2' : 'Fixtures',
		'A3' : 'Emblements',
		'A4' : 'Lateral support',
		'Correct' : 'A1',
		'response' : 'the root word of "situs" is "site".  Therefore, the answer is location.  The more extensive meaning of the word is the influence of the location on the property\'s value.'
	},
	
	{
		'Q' : 'Which of the following is correct regarding water or mineral rights? ',
		'A1' : 'they are real property.',
		'A2' : 'they are rights, not a kind of property.',
		'A3' : 'they are personal property.',
		'A4' : 'It depends on how they\'re used.',
		'Correct' : 'A1',
		'response' : 'though water shares are considered personal property, water rights are classified as real property and are attached to the deed or conveyed with a deed.'
	},
	
	{
		'Q' : 'When real property is detached from real property, it is a process called:',
		'A1' : 'severance',
		'A2' : 'situs',
		'A3' : 'Accession',
		'A4' : 'Appurtenant',
		'Correct' : 'A1',
		'response' : 'the root word of severance is "sever".  Thus the process of severing real property from real property is called severance, and the result is now classified as personal property.  Situs is the value of the property due to its location, accession is adding to the real property, and appurtenant is attached to the land or the deed.'
	},
	
	{
		'Q' : 'A fixture is:',
		'A1' : 'Considered real estate',
		'A2' : 'Considered personal property',
		'A3' : 'Attached to a business',
		'A4' : 'sometimes real property and sometimes personal property, depending upon how it is attached',
		'Correct' : 'A1',
		'response' : 'It is tempting to select the "depends" choice, but in the law there are some absolutes.  This is one of them.  A fixture is always real property.'
	},
	
	{
		'Q' : 'Which of the following is NOT a protected class so far as discrimination in rental properties is concerned?',
		'A1' : 'motorcycle owners',
		'A2' : 'race',
		'A3' : 'religion',
		'A4' : 'familial status',
		'Correct' : 'A1',
		'response' : 'If the landlord prefers not to rent to motorcycle owners, since most of the bikes are very noisy, that is the landlord\'s privilege.  The other three are protected classes, and you cannot refuse to rent to someone because of those reasons.'
	},
	
	{
		'Q' : 'Which of the following is illegal and unenforceable?',
		'A1' : 'A clause in the lease that says all remedies against the landlord are forfeited when the tenant signs the lease.',
		'A2' : 'the tenant joins a renters\' union.',
		'A3' : 'the landlord inspects the property with proper notice and during reasonable hours.',
		'A4' : 'A clause is put in the lease specifying that if a legal action takes place, the party that loses must pay all legal costs for both parties.',
		'Correct' : 'A1',
		'response' : '	It is quite usual for a contract to specify that in a dispute in court the losing party will pay the costs for the other.  For a tenant to join a renters\' union or organization is not illegal, and of course, the landlord inspecting with proper notice is perfectly legal.'
	},
	
	{
		'Q' : 'Property D is appraised at $1,200,000.  The assessed rate is 24% and the tax rate is 98.674 mills.  How much are the property taxes?',
		'A1' : '$28,418.11',
		'A2' : '$2,841.81',
		'A3' : '$89,880.69',
		'A4' : '$2,880.00',
		'Correct' : 'A1',
		'response' : 'the computation is:  $1,200,000 X 24% = $288,000 X .098674 = $28,418.11.  The formula is:  Appraised value X Assessed rate X Tax rate = Tax due.  Note that the mills have to converted to a decimal by moving the decimal point three places to the left.  NOTE:  If the problem said:  "The tax rate is 123.456" do not move the decimal!  You only move the decimal if the word mill, mill rate, mill levy, or mills is used.'
	},
	
	{
		'Q' : 'If a property is certified as greenbelt, what is the tax advantage to the owner of the farm?',
		'A1' : 'the property is assessed at a lower rate',
		'A2' : 'there is a 55% savings on property taxes',
		'A3' : 'the property will never be taxed on a "regular" basis',
		'A4' : 'taxes are reduced by 50%',
		'Correct' : 'A1',
		'response' : 'there are very strict agricultural requirements to gain greenbelt status.  If the property is sold, the new owner has to prove the requirements are still met and apply within 120 days of the change of ownership or the seller will be liable for five years of roll-back taxes (the amount of taxes saved over the previous five years).'
	},
	
	{
		'Q' : 'the property taxes have not yet been paid.  They were $1,627 last year, and taxes are assessed for the whole year.  The settlement date is March 13.  How will the taxes appear on the settlement statement?',
		'A1' : 'A debit to the seller, and a credit to the buyer',
		'A2' : 'A debit to both of them, as they both owe part',
		'A3' : 'Entered as a credit to the seller and a debit to the buyer',
		'A4' : 'Debit for the seller\'s portion, and nothing to the buyer.',
		'Correct' : 'A1',
		'response' : 'the sellers\' share will be determined.  It will be a debit to them (subtracted from what they receive) and a credit to the buyer.  Buyers will get the seller\'s portion to be used when they pay the full years\' taxes.'
	},
	
	{
		'Q' : 'the taxable amount in the exchange of property is known as:',
		'A1' : 'boot',
		'A2' : 'depreciation',
		'A3' : 'cost recovery',
		'A4' : 'capital gain',
		'Correct' : 'A1',
		'response' : 'Boot is personal property or money to equalize value or debt reduction.  Depreciation is a tax deduction for investment property and cost recovery is its other name.  Capital gain is your "bottom line," or profit.'
	},
	
	{
		'Q' : 'If the cost of an income property was $150,000, the depreciation that had been taken during the period the property was owned was $21,800, and $6,300 worth of improvements had been made just prior to the sale, the adjusted cost basis would be:',
		'A1' : '$134,500',
		'A2' : '$150,000',
		'A3' : '$171,800',
		'A4' : '$165,500',
		'Correct' : 'A1',
		'response' : 'Cost plus improvements minus depreciation:  $150,000 plus $6,300 minus $21,800.'
	},
	
	{
		'Q' : 'the Ellisons were having a hard time selling their vacation home.  They decided to do some painting, which cost $3,500.  They accepted an offer 10 weeks later for $185,000.  Which of the following best describes how they should handle the painting expense on their taxes?',
		'A1' : 'they can adjust their sales price to $181,500.',
		'A2' : 'they add the $3,500 into their cost of sale category.',
		'A3' : 'too bad, but they can\'t get any tax benefit from it.',
		'A4' : 'since it was more than two months, they can\'t do anything.',
		'Correct' : 'A1',
		'response' : 'Fix up expenses within the 90 day window (90 days back from the date of accepting the offer) can be used to adjust the sales price to a lower amount.  They cannot be put in the cost of sale computation.'
	},
	
	{
		'Q' : 'Generally, how many policies are purchased, by whom, for whom, and for how much, in completing a transaction for a single family home?',
		'A1' : 'two policies, both paid for at settlement, covering lender and buyer',
		'A2' : 'One policy, paid for by buyer, amount of purchase price, covering the lender',
		'A3' : 'One policy, paid for by seller, amount of loan, covering the lender',
		'A4' : 'two policies, extending forward in time, full amount of purchase price',
		'Correct' : 'A1',
		'response' : 'the lender\'s policy is paid for by the borrower in the amount of the loan; the buyer\'s (owner\'s) policy is paid for by the seller in the amount of the purchase price.  If a buyer were paying cash, there would probably only be one policy, that of the seller covering the interest of the buyer.  But neither choice listing one policy correctly identifies that situation.  Both are paid for only once, at settlement and extend backward in time from the closing.'
	}
);

//General 3
questions[2] = new Array(

	{
		'Q' : 'When a seller\'s agent suggests an offer amount to the buyer that is less than the listed price, the agent might be creating:',
		'A1' : 'agency by implication.',
		'A2' : 'agency by estoppel.',
		'A3' : 'agency by ratification.',
		'A4' : 'agency by express consent.',
		'Correct' : 'A1',
		'response' : 'When a sales agent or broker begins to conduct themselves as an agent to someone, they risk creating an implied agency regardless of what agency contracts may or may not exist.  In this situation, such a suggestion is to the advantage of the buyer (customer) and thus could have the effect of creating an undisclosed dual agency.  They are the seller\'s agent by contract, but are conducting themselves as if an agent to the buyer.'
	},
	
	{
		'Q' : 'the seller became angry with the broker and refused to pay the commission, stating he didn\'t like the broker,  so she was no longer his agent.  The broker sued the seller and the court ruled in favor of the broker (oh, happy day!).  The court ruled that the seller could not deny the fact that the agency was created in the listing.  This is agency created by:',
		'A1' : 'estoppel',
		'A2' : 'implication',
		'A3' : 'statute',
		'A4' : 'ratification',
		'Correct' : 'A1',
		'response' : 'When the court becomes involved in confirming an agency relationship, it is called agency by estoppel.  Implication would be created by the acts of the agent and principal, statutory agency is created in legal code, and ratification is simply the approval of the agency relationship by the principal after the agency service has already been provided (agency by implication).'
	},
	
	{
		'Q' : 'A sheriff under a mortgage, offers a property for sale at the foreclosure auction.  This would be an example of:',
		'A1' : 'Agency by statute',
		'A2' : 'Agency by estoppel',
		'A3' : 'Agency by implication',
		'A4' : 'Agency by default',
		'Correct' : 'A1',
		'response' : 'the law makes the sheriff the agent, creating agency by statute.  The law creates agency by estoppel when the relationship has already been formed by implication.  The law affirms it.  There is no agency by default.'
	},
	
	{
		'Q' : 'Which of the following is NOT an essential element of value?',
		'A1' : 'Cost',
		'A2' : 'scarcity',
		'A3' : 'Utility',
		'A4' : 'transferability',
		'Correct' : 'A1',
		'response' : 'the acronym to help you remember the four essential elements of value is DUST.  In this question you have the UST, and are lacking the D, which is demand.  What the property cost when the current owner purchased it is not relevant.'
	},
	
	{
		'Q' : 'When the cap rate goes up, and the net operating income remains the same, the value will:',
		'A1' : 'decrease.',
		'A2' : 'remain the same.',
		'A3' : 'increase.',
		'A4' : 'it depends upon the economy.',
		'Correct' : 'A1',
		'response' : 'the see-saw is at work here with value on one end and the cap rate and risk on the other end.  So when either the cap rate or the risk goes up, the value will inevitably go down, and vice versa.  However, this theory of value is based on the supposition that the net operating income (NOI) remains the same.'
	},
	
	{
		'Q' : 'When an appraiser is trying to estimate value by finding the best comparables available, that is applying the principle of:',
		'A1' : 'substitution',
		'A2' : 'highest and best use',
		'A3' : 'conformity',
		'A4' : 'contribution',
		'Correct' : 'A1',
		'response' : 'though highest and best use is the first principle the appraiser applies, in finding suitable comparables, the most important principle is substitution.  Think of a substitute as something that can effectively serve in place of what is already there.  Thus, you could say that this house is so much like the subject property that its value could be substituted for the value of the subject property.'
	},
	
	{
		'Q' : 'the most difficult way for an appraiser to determine the value of improvements is:',
		'A1' : 'quantity survey',
		'A2' : 'unit-in-place',
		'A3' : 'square foot method',
		'A4' : 'cubic foot method',
		'Correct' : 'A1',
		'response' : 'Quantity survey requires the appraiser to assemble a list of all the materials needed to build the structure, another list of the labor required to put those materials together along with the cost of that labor, then all the non-construction costs (called management fees).  Finally, the appraiser must factor in a profit for the builder.  This is a massive project, and therefore seldom used.  Total square feet times cost per square foot or total cubic feet times cost per cubic foot are relatively easy.  Unit-in-place is a simplification of the quantity survey method by getting costs from subcontractors or determining cost of components such as an added bathroom, vaulted ceiling, or garage.'
	},
	
	{
		'Q' : 'Gross Operating Income (GOI) minus fixed and variable expenses results in:',
		'A1' : 'NOI',
		'A2' : 'GSI',
		'A3' : 'GRM',
		'A4' : 'GEI',
		'Correct' : 'A1',
		'response' : 'this is the formula for calculating net operating income (NOI).  Remember NOI is always an annual number.  GSI is gross scheduled income, a number that presumes that there were no lost rents and no vacancies.  GRM is the gross rent multiplier.  GEI is the Gross Effective Income and the same thing as GOI, which is the income actually received but before any expenses have been subtracted.'
	},
	
	{
		'Q' : 'Jester verbally offers to sell his office building to Sadier.  Sadier accepts by handing Jester the full price of $250,000 in cash.  Jester takes the money.	This is an ',
		'A1' : 'unenforceable contract.',
		'A2' : 'this is a void contract.',
		'A3' : 'this is a voidable contract.',
		'A4' : '',
		'Correct' : 'A1',
		'response' : 'since there was nothing in writing, Jester can keep the money, declaring it to be a gift.	If either party defaulted and the other party took them to court, the court would not enforce the contract since there is no evidence that the contract even existed.  Under the Statute of Frauds, only certain contracts have to be in writing.  First on the list is those for purchase and sale of real estate, therefore, this contract is unenforceable, meaning the court will not deal with it.'
	},
	
	{
		'Q' : 'A contract that is not fully performed, but it is not in default would be considered:',
		'A1' : 'Executory',
		'A2' : 'Executed',
		'A3' : 'Implied	',
		'A4' : 'Contingent',
		'Correct' : 'A1',
		'response' : 'When a contract is in process, it is executory.  If it is fully executed, or fulfilled, the contract has been completed.  If it has a contingency clause, that is a condition which could allow one of the parties to get out of the contract.  Implication is a method of creating a contract, not performing it.'
	},
	
	{
		'Q' : '"Wow! You\'re going to love this house.  It is the best house in the whole neighborhood."  This statement, if made by a real estate agent to a potential buyer, would likely be considered:',
		'A1' : 'puffing and legal.',
		'A2' : 'positive, intentional fraud.',
		'A3' : 'negative, intentional fraud.',
		'A4' : 'constructive fraud.',
		'Correct' : 'A1',
		'response' : 'A person of reasonable intelligence would not rely on this statement in making a decision to purchase the house.  Thus, it would be classified as puffing and be legal.  It becomes fraud when the statement contains inaccurate information that the listener is likely to use in making a decision.  It would have to be an overt lie to be positive fraud, information withheld to be negative fraud, or be a problem not revealed because the agent didn\'t know about it, to be constructive fraud.'
	},
	
	{
		'Q' : 'When considering an offer, acceptance of that offer by the offeree would not be considered valid unless the following had taken place.',
		'A1' : 'Communication',
		'A2' : 'Abrogation',
		'A3' : 'Counter offer',
		'A4' : 'tendering of the offer',
		'Correct' : 'A1',
		'response' : 'In accepting an offer, it is not sufficient to sign the offer to achieve acceptance.  The acceptance must be communicated back to the offeror.  Abrogation has to do with replacing the purchase agreement with the settlement documents.  To "tender" an offer is simply to present the offer to the offeree.  The acceptance and communication could be refer to the original offer or to a counter offer.'
	},
	
	{
		'Q' : 'A property is sold at an estate sale and title is passed from the executor to the buyer.  The executor\'s deed would be most like which of the following?',
		'A1' : 'special Warranty Deed',
		'A2' : 'General Warranty Deed',
		'A3' : 'Quit Claim Deed',
		'A4' : 'Patent Deed',
		'Correct' : 'A1',
		'response' : 'An executor\'s deed is almost always a special warranty deed.  It guarantees the grantor (executor) has the right to convey and that the executor has not encumbered the property.  However, it does not warrant that encumbrances do not exist that were there prior to the executor becoming responsible for the property.  Therefore, if buying at an estate sale, a title search would be advisable.'
	},
	
	{
		'Q' : 'A person appointed by the court to carry out the terms of a will is called a(n):',
		'A1' : 'Administrator',
		'A2' : 'testator',
		'A3' : 'Executor or Executrix',
		'A4' : 'Devisor',
		'Correct' : 'A1',
		'response' : 'If the court makes the appointment the title is "administrator."  If the person is appointed in the will, they are called an executor or executrix or sometimes called a personal representative.  The testator is the person who makes a will and the devisor is the testator who gives a gift of real property in the will.  A devise is the gift of real property, and the devisee is the one who receives it.'
	},
	
	{
		'Q' : 'Which of the following persons would be most likely to be found guilty of redlining:',
		'A1' : 'Lending officer',
		'A2' : 'real estate broker',
		'A3' : 'title officer',
		'A4' : 'real estate sales agent',
		'Correct' : 'A1',
		'response' : 'redlining was a practice of lending institutions.  They would have maps on their walls and literally, in some cases, draw red lines around certain geographical areas in the city and refuse to give loans to anyone who lived in the red-lined district.'
	},
	
	{
		'Q' : 'According to the rules and regulations of Truth in Lending:',
		'A1' : 'the interest rate cannot be quoted without a disclosure of the APR, and other numbers.',
		'A2' : 'All advertising has to be fair and accurate.',
		'A3' : 'there is a three calendar day right of rescission.',
		'A4' : 'the buyer must be shown the closing statement 24 hours before closing.',
		'Correct' : 'A1',
		'response' : 'Only the APR and purchase price can be quoted in advertising without disclosing all other related numbers.  The right of rescission is three business days, advertising rules are more specific than just "fair and accurate", and the 24 hour rule is a RESPA rule.  The need for revealing the annual percentage rate (APR) is one of the major features of Reg Z and facilitates the process of the consumer comparing and selecting the best loan.'
	},
	
	{
		'Q' : 'Families with young children had trouble finding places to live because home and apartment owners would bar children from living in their units.  This practice became illegal in the 1988 act that gave protection to:',
		'A1' : 'familial status',
		'A2' : 'marital status',
		'A3' : 'age',
		'A4' : 'handicapped',
		'Correct' : 'A1',
		'response' : 'Familial status and the handicapped were the two new protected classes added in the 1988 amendment.  Housing had to allow children under 18 unless the project was an adult community that meant the requirements to be an exception to the law.  To qualify as an adult community they had to:  1) show that 80% of the units had at least one near elderly person (55 or older), or 2) have every unit occupied by only persons 62 years of age or over (the elderly).'
	},
	
	{
		'Q' : 'Which of the following would NOT be an example of an area regarded as wetlands?',
		'A1' : 'shorelines',
		'A2' : 'swamps',
		'A3' : 'marshes',
		'A4' : 'floodplains',
		'Correct' : 'A1',
		'response' : 'With the shoreline issue, remember littoral law which has to do with boundary issues, but not wetlands.  The other three could all be wetlands.'
	},
	
	{
		'Q' : 'If a lender wanted to protect itself from borrowers who let people assume their loan when they sell their home, it would insert this clause into the loan document.',
		'A1' : 'Alienation clause',
		'A2' : 'Escalation clause',
		'A3' : 'release clause',
		'A4' : 'subordination clause',
		'Correct' : 'A1',
		'response' : 'Alienation clause is the official name of the due-on-sale clause, which prohibits the loan from being assigned to a new owner of the home.  The word "alienate" means to separate from.  The escalation clause contractually raises the payments, the release clause is used to grant partial release of some of the property as security for a loan, and subordination allows loan priority to be altered.'
	},
	
	{
		'Q' : 'Which of the following is a junior lien:',
		'A1' : 'second mortgage',
		'A2' : 'secondary money market',
		'A3' : 'Participation mortgages',
		'A4' : 'Prime rate mortgages',
		'Correct' : 'A1',
		'response' : 'A first mortgage or trust deed is the senior lien, or the one that has first priority.  All subsequent mortgages would be considered junior liens.  Participation and prime rate describe features of the mortgage but indicate nothing about priority.  The secondary money market has nothing to do with the creation or priority of a loan.'
	},
	
	{
		'Q' : 'Mr. Eliason obtained a loan, and used his home and boat as security for the loan.  This would be an example of a(n):',
		'A1' : 'Package mortgage',
		'A2' : 'Blanket mortgage',
		'A3' : 'Chattel mortgage',
		'A4' : 'Purchase money mortgage',
		'Correct' : 'A1',
		'response' : 'When both real and personal property are used as collateral for a loan, the loan is called a package mortgage.  A blanket mortgage uses two or more parcels of real property.  A chattel loan uses personal property only as collateral, and a purchase money mortgage is when the seller is the lender.'
	},
	
	{
		'Q' : 'J wants to make extra payments of principal on his loan.  To do this, his mortgage must contain a(n):',
		'A1' : 'Prepayment privilege clause',
		'A2' : 'Prepayment penalty clause',
		'A3' : 'Non-disturbance clause',
		'A4' : 'Extra principal clause',
		'Correct' : 'A1',
		'response' : 'Any payment on a loan which is greater than the required monthly payment is considered a prepayment of principal.  A prepayment privilege allows this to happen, and the prepayment penalty discourages it.  A non-disturbance clause protects tenants in case the borrower defaults, and there is no "extra principal clause."'
	},
	
	{
		'Q' : 'sections in a township are numbered from 1-36.  Section number 1 would be in the:',
		'A1' : 'Northeast corner of the township.',
		'A2' : 'Northwest corner of the township.',
		'A3' : 'southwest corner of the township.',
		'A4' : 'southeast corner of the township.',
		'Correct' : 'A1',
		'response' : 'the numbering starts in the upper right-hand corner, and continues in a serpentine fashion.  Therefore, each numbered section is in sequence with the numbers before and after it.  Section 7 would be just below Section 6 and to the left of Section 8.'
	},
	
	{
		'Q' : 'An acre has how many square feet?',
		'A1' : '43,560',
		'A2' : '640',
		'A3' : '5,280',
		'A4' : '27,878,400',
		'Correct' : 'A1',
		'response' : 'this is a number you should memorize.  Also know that there are 640 acres in a section and 5,280 linear feet in a mile.  A township has 27,878,400 square feet and no one needs to know that.'
	},
	
	{
		'Q' : 'Alice is the manager of Hillside Apartments.  One winter she fails to provide heating to Martin\'s apartment unit.  Martin moves out and refuses to pay rent, even though two years remain on the lease.  What is the legal basis of Martin\'s justification for moving out.',
		'A1' : 'Constructive eviction',
		'A2' : 'Actual eviction	',
		'A3' : 'Escalation of lease',
		'A4' : 'there is no legal basis for his leaving.',
		'Correct' : 'A1',
		'response' : 'Constructive eviction is the right of the lessee to move without being responsible for the remaining terms of the lease.  This right is almost always justified because the lessor did not keep the premises habitable, as was the case in this situation.'
	},
	
	{
		'Q' : 'Helen had a one-year lease.  At the end of the year, Helen continued to send checks for the rent.  Her landlord returned the checks and asked her to leave.  She refused.  Helen is now considered a: ',
		'A1' : 'tenant at sufferance',
		'A2' : 'Holdover tenant',
		'A3' : 'trespasser',
		'A4' : 'Periodic tenant',
		'Correct' : 'A1',
		'response' : 'Helen is now illegally possessing the property, and thus is referred to as a tenant at sufferance.  If the landlord had kept the checks, Helen would have become a holdover tenant with a periodic or month-to-month lease.  She is not considered a trespasser because she once had a legal right to occupy the property.'
	},
	
	{
		'Q' : 'Less than freehold could best be restated as:',
		'A1' : 'less than ownership',
		'A2' : 'less than a leasehold',
		'A3' : 'less than paid for',
		'A4' : 'less than legal',
		'Correct' : 'A1',
		'response' : 'the legal meaning of "freehold" is ownership.  A freehold estate indicates an ownership interest, while a less than freehold indicates an interest or legal right that does not involve any ownership, such as a lease.'
	},
	
	{
		'Q' : 'Broker Bell entered into an agreement with Seller Samuels to market Samuels home and find a buyer for him.  The agreement stated that regardless of who found the buyer, Samuels would owe Bell a commission.  What kind of a listing agreement is this?',
		'A1' : 'Exclusive right-to-sell listing',
		'A2' : 'Exclusive agency listing',
		'A3' : 'Open listing',
		'A4' : 'Net listing',
		'Correct' : 'A1',
		'response' : 'When there are no ifs, ands, or buts about it, it has to be an exclusive right to sell.  Exclusive agency allows the sellers to find their own buyer and not pay a commission.  An open listing is non-exclusive, and a net listing is prohibited in most states.'
	},
	
	{
		'Q' : 'the seller would like to list his home, but there are two parties he knows who might buy it.  He doesn\'t want to pay a commission if either of these parties buy the home.  This would be a good time for the agent to take a(n):',
		'A1' : 'Exclusive right-to-sell with exclusions',
		'A2' : 'Exclusive agency with exceptions',
		'A3' : 'Exclusive right-to-sell listing',
		'A4' : 'Net listing',
		'Correct' : 'A1',
		'response' : 'It is always wise to have an exclusive right to sell listing if possible.  In this case, the exclusive right can still be obtained by allowing exclusions of specified names.  It is wise to put a limit on the number of names excluded and the time for the exclusion.'
	},
	
	{
		'Q' : 'If a Sheriff\'s Sale is held, the document that dictated the foreclosure sale was a:',
		'A1' : 'Mortgage',
		'A2' : 'Habendum',
		'A3' : 'trust deed and note',
		'A4' : 'Deed in lieu of foreclosure',
		'Correct' : 'A1',
		'response' : 'since mortgages require a judicial (court) process, a sheriff is appointed to conduct the auction of the property.  Under a trust deed and note, a trustee would sell the property.  With a deed in lieu of foreclosure there would be no foreclosure sale, and habendum is a clause in a deed.'
	},
	
	{
		'Q' : 'the buyer at a Trustee\'s sale receives title to the property from which of the following?',
		'A1' : 'trustee\'s Deed',
		'A2' : 'sheriff\'s Deed',
		'A3' : 'Uniform Real Estate Contract',
		'A4' : 'Certificate of Sale',
		'Correct' : 'A1',
		'response' : 'It should come as no surprise that a trustee would give a trustee\'s deed.  The sheriff\'s deed is used in foreclosure under a mortgage.  Neither of the other two convey title.'
	},
	
	{
		'Q' : 'In a mortgage or trust deed foreclosure, there is a legal requirement for notice.  Where must notice be given?',
		'A1' : 'In a newspaper, the county recorder\'s office, on the property',
		'A2' : 'On the property, in a publication for legal notices',
		'A3' : 'the county courthouse and on the property',
		'A4' : 'Only on the property itself',
		'Correct' : 'A1',
		'response' : 'It starts with the county recorder\'s office and the property.  When it is time for the advertising period, then the newspaper is involved, and it is not a specific publication only for legal notices.'
	},
	
	{
		'Q' : 'to be considered a valid option contract, the option must contain all of the following EXCEPT:',
		'A1' : 'Lease agreement',
		'A2' : 'Non-refundable consideration',
		'A3' : 'Purchase price and terms',
		'A4' : 'time period for the option',
		'Correct' : 'A1',
		'response' : 'An option contract would have no lease information in it.  However, if we are talking about a lease/option (different from just an option), then the terms of the lease would be included as well as purchase information.'
	},
	
	{
		'Q' : 'Don Meyers has the legal right to act as though he owns a property for the rest of his life, even though the property is actually owned by his father Ron Meyers.  Don is a:',
		'A1' : 'Holder of a life estate',
		'A2' : 'Holder of a life estate pur autre vie',
		'A3' : 'remainderman',
		'A4' : 'Holder of Rights of Reversion',
		'Correct' : 'A1',
		'response' : 'this is a straightforward description of a life estate.  Don already is the grantee of the life estate, so he can\'t be a remainderman, and since it is based on his own life, it can\'t be pur autre vie.  The grantor holds the right of reversion.'
	},
	
	{
		'Q' : 'Mary and Martin took ownership to their home in such a manner that one of them could not legally dispose of his/her interest in the property without the approval of the other.  This condition is a feature of:',
		'A1' : 'tenants by the entirety.',
		'A2' : 'tenancy in severalty, or sole ownership.',
		'A3' : 'joint tenancy.',
		'A4' : 'joint venture.',
		'Correct' : 'A1',
		'response' : 'tenants by the entirety are treated as one person, thus neither the husband nor the wife can dispose of their interest in the property in any manner without the approval of the other.  Joint tenancy, on the other hand is based on equality and throughout the ownership any owner can dispose of their interest in the property without approval of the other owner or owners.  Severalty means only one owner, therefore is not applicable, and a joint venture is a business arrangement and also not applicable here.'
	},
	
	{
		'Q' : 'When the issues of continuous possession, open and notorious presence, and activity on the property that is not in the best interest of the owner arise, the topic discussed is:',
		'A1' : 'adverse possession.',
		'A2' : 'tenancy at sufferance.',
		'A3' : 'tenancy at will.',
		'A4' : 'fee simple defeasible.',
		'Correct' : 'A1',
		'response' : 'these are all issues of adverse possession and have nothing to do with the other choices.  Tenancy at sufferance and at will are ways of leasing.  Fee simple defeasible is ownership with conditions attached.'
	},
	
	{
		'Q' : 'the Wilsons give a gift of land to the city in honor of the son they lost to leukemia.  It is to be used as a Little League baseball field.  What would this be called?',
		'A1' : 'Voluntary dedication',
		'A2' : 'statutory dedication',
		'A3' : 'Fee simple',
		'A4' : 'Fee simple absolute',
		'Correct' : 'A1',
		'response' : 'A charitable gift of  property is voluntary dedication.  Statutory dedication is a required gift, like the developer giving the land for roads.  Fee simple and fee simple absolute are synonymous terms for the highest form of ownership.'
	},
	
	{
		'Q' : 'the main difference between police power and eminent domain is:',
		'A1' : 'Compensation',
		'A2' : 'Disregard for the law',
		'A3' : 'the creation of a variance',
		'A4' : 'the buffer zone',
		'Correct' : 'A1',
		'response' : 'Compensation is absolutely required if the power of eminent domain is exercised, whereas the exercise of police power does not require compensation.'
	},
	
	{
		'Q' : 'An easement can best be described as:',
		'A1' : 'A legal, specific right of use in someone else\'s property.',
		'A2' : 'A limited ownership in another person\'s property.',
		'A3' : 'A simple way to resolve disputes.',
		'A4' : 'A legal way to ease the burden of encroachments.',
		'Correct' : 'A1',
		'response' : 'An easement is a "right of use" in another\'s property, but involves no ownership interest of the property.'
	},
	
	{
		'Q' : 'Zoning is a right granted to the:',
		'A1' : 'state',
		'A2' : 'federal government',
		'A3' : 'city and county',
		'A4' : 'given to whatever level of government needs it',
		'Correct' : 'A1',
		'response' : 'Zoning is exclusively a state\'s right.  However, the state delegates that right to cities and counties.'
	},
	
	{
		'Q' : 'A display cabinet in a retail store would be considered a:',
		'A1' : 'trade fixture and personal property ',
		'A2' : 'trade fixture and real property',
		'A3' : 'fixture and real property',
		'A4' : 'fixture and personal property',
		'Correct' : 'A1',
		'response' : 'It most likely would be considered a trade fixture, since it is attached to the business.  Even if it were bolted to the floor or screwed to the wall, if it belongs to the business, it is a trade fixture.  Remember, fixtures are always classified as real property and trade fixtures are always personal property.'
	},
	
	{
		'Q' : 'Which of the following is a true statement about trade fixtures:',
		'A1' : 'Attachment is not an issue one way or the other.',
		'A2' : 'the method of attachment is significant.',
		'A3' : 'Whether the business owns the property or is renting is important.',
		'A4' : 'Only attached items are considered trade fixtures.',
		'Correct' : 'A1',
		'response' : 'trade fixtures are legally viewed as personal property whether attached to the real property or not.  A barber chair bolted into the concrete floor is typically classified as a trade fixture, and therefore personal property attached to the barbershop, not to the floor.'
	},
	
	{
		'Q' : 'Which of the following is a complete definition of real property?',
		'A1' : 'Land, appurtenances, air space to infinity, and everything below the surface to the earth\'s center',
		'A2' : 'Land and the air above it',
		'A3' : 'Land, the buildings thereon, and anything permanently affixed to the land and/or the buildings',
		'A4' : 'Land and the mineral rights',
		'Correct' : 'A1',
		'response' : 'real property includes three areas, land, the air space above the land, and the subsurface below the land to the center of the earth, as well as things permanently attached to the land.'
	},
	
	{
		'Q' : 'Which of the following best explains the difference between trade fixtures and fixtures?',
		'A1' : 'trade fixtures transfer by bill of sale, fixtures transfer with a deed.',
		'A2' : 'trade fixtures require installation, fixtures do not.',
		'A3' : 'trade fixtures always belong to the owner of the property, fixtures do not.',
		'A4' : 'trade fixtures are considered amenities, fixtures are not.',
		'Correct' : 'A1',
		'response' : 'Keep in mind that a trade fixture is not a variation of a fixture.  Trade fixtures are a separate and distinct class of property and are always designated as personal property.  Therefore, trade fixtures are transferred with a bill of sale and fixtures, which are always real property, are transferred with the deed.'
	},
	
	{
		'Q' : 'Which of the following will the tenant who has abandoned his lease before the expiration date NOT have to pay?',
		'A1' : 'the period prior to the expiration of the lease, but after the unit has been re-rented',
		'A2' : 'Commission to the manager for finding a replacement tenant',
		'A3' : 'rent for the unused part of the lease',
		'A4' : 'Cost to restore the property to rentable condition',
		'Correct' : 'A1',
		'response' : 'If there was a five year lease and the tenant abandoned the property after three years, the tenant would still be obligated to pay rent for the other two years.  However, if the unit is rented to someone else, the owner can\'t collect rent for the same space from two people.'
	},
	
	{
		'Q' : 'Ad valorem means:',
		'A1' : 'taxes are computed "according to value"',
		'A2' : 'taxes are "added to the value"',
		'A3' : 'taxes are "not added to the value"',
		'A4' : 'It has no special meaning',
		'Correct' : 'A1',
		'response' : 'Property tax and sales tax are two examples of ad valorem taxes.  The term simply means according to value, in Latin.  Two neighbors pay the same tax rate, but because one house is more valuable than the other, it will incur a larger tax bill.'
	},
	
	{
		'Q' : 'Mr. Allen paid $1,789.00 in property tax.  If his tax rate was 78.4 mills and the assessed rate was 32%, what was the appraised value of his home, as determined by the county?',
		'A1' : '$71,308.99',
		'A2' : '$57,248.00',
		'A3' : '$44,882.43',
		'A4' : '$55,906.30',
		'Correct' : 'A1',
		'response' : 'the computation is:  $1,789 ˜ .0784 = $22,818.88 ˜ 32% = $71,308.99.  Turn the formula around this way (remember we\'re working from the bottom up, not the top down):  Tax Due ˜ Tax rate = Assessed value ˜ Assessed rate = Appraised Value.'
	},
	
	{
		'Q' : 'Which of the following is NOT a requirement for a property to be certified as greenbelt?',
		'A1' : 'ten contiguous acres',
		'A2' : 'Five contiguous acres',
		'A3' : 'Land devoted to agriculture',
		'A4' : 'Expectation of profit',
		'Correct' : 'A1',
		'response' : 'Note:  Any adjacent land, such as landscaped yards, cannot be included in the total five acres.'
	},
	
	{
		'Q' : 'the buyers are assuming the seller\'s loan.  The hazard insurance company has agreed the buyers may step into the seller\'s position in the existing hazard insurance policy.  Settlement is July 16, and the hazard insurance is paid for up to Dec. 15.  How would this be noted on the settlement statement?',
		'A1' : 'A debit to the buyer and a credit to the seller.',
		'A2' : 'If assuming the loan, the buyers automatically get the benefit of the insurance, so no notation will appear on the settlement statement.',
		'A3' : 'It will appear as a credit to the buyer, as they get credit for the insurance already in existence.',
		'A4' : 'A credit to the buyer and a debit to the seller.',
		'Correct' : 'A1',
		'response' : 'the buyer will receive benefit for a portion of the insurance already paid for by the seller.  So, unless agreed otherwise, they should reimburse the sellers for the amount they benefit from.  Therefore, it will be a debit to the buyer and, since it goes to reimburse the sellers, a credit to them.'
	},
	
	{
		'Q' : 'You recently sold a home you have owned and lived in for several years.  When computing your capital gains, what you paid for it is:',
		'A1' : 'Cost Basis',
		'A2' : 'Adjusted Cost Basis',
		'A3' : 'Capital Improvement',
		'A4' : 'Cost Recovery',
		'Correct' : 'A1',
		'response' : 'Cost basis = what you bought it for.  You can increase that by the amount you paid for non-loan related closing costs.  Adjusted cost basis is for investment properties and incorporates improvements and depreciation (cost recovery).  Capital improvements are major work or additions.'
	},
	
	{
		'Q' : 'the owner of a single-family rental property sold it and realized $40,000 in "bottom line" profits.  It had been purchased three years previously.  Which of the following statements is true regarding what the owner now owes the IRS?',
		'A1' : 'the profits would be taxed separately from the cost recovery.',
		'A2' : 'the current capital gains tax percentage would apply to the full amount.',
		'A3' : 'since it was residential, owned for three years, the exemption would apply.',
		'A4' : 'Add the $40,000 to other income and pay the appropriate tax.',
		'Correct' : 'A1',
		'response' : 'Profits or capital gains are added to your other income and the appropriate tax rate used (depending upon your bracket).  Recapture of depreciation is taxed at a different rate.'
	},
	
	{
		'Q' : 'Under which of the following situations would the sellers who made a profit selling their home actually get out of paying taxes?',
		'A1' : 'they meet the rules in selling their primary residence.',
		'A2' : 'they transfer the ownership in a tax deferred exchange.',
		'A3' : 'they are 55 and have never taken this exemption before.',
		'A4' : 'they buy another home within two years.',
		'Correct' : 'A1',
		'response' : 'If it\'s their primary residence, they have lived in and owned it for three of the last five years and haven\'t used the exemption privilege in the last two years they qualify.  A tax deferred exchange is just that - deferred.  It will catch up later when they sell for cash.  The age 55 issue and rollover, or buy another of equal value in two years haven\'t been applicable for years.'
	},
	
	{
		'Q' : 'Which of the following is a true statement about title insurance?',
		'A1' : 'No single family residence can be sold without title insurance coverage.',
		'A2' : 'the cost of title insurance coverage is usually split between buyer and seller.',
		'A3' : 'the listing broker always picks the title company of his/her choice.',
		'A4' : 'A preliminary title report is only information, not insurance coverage.',
		'Correct' : 'A1',
		'response' : 'the preliminary report (PR) allows the buyer to see the condition of the title and back out of the deal if that contingency is in the purchase contract.  It provides no insurance coverage.  It usually includes a commitment for a policy of title insurance to be issued at closing.'
	}
);

//General 4
questions[3] = new Array(
	{
		'Q' : 'An agent who has authority to perform all lawful acts for a principal is referred to as a(n):',
		'A1' : 'universal agent',
		'A2' : 'special agent',
		'A3' : 'agent by estoppel',
		'A4' : 'general agent',
		'Correct' : 'A1',
		'Response' : 'The key word here is "all."  Typically, universal agency would require a general power of attorney, or appointment as a trustee in specialized situations.  However, some form of power of attorney could be applied in all types of agency.  Special agency is very specific and limited.  A general agent uses his/her expertise to meet the objectives of the client.'
	},
	
	{
		'Q' : 'A listing broker would be considered which of the following types of agent?',
		'A1' : 'Specific',
		'A2' : 'General',
		'A3' : 'Bilateral',
		'A4' : 'Universal',
		'Correct' : 'A1',
		'Response' : 'A listing agreement only contracts for the agent (broker) to seek a ready, willing, and able buyer for a defined parcel of property.  Since the task is so limited, it is considered specific or special agency.  A general agent uses his/her expertise to meet the objectives of the principal.  There is no such thing as a bilateral agent, and a universal agent does ALL things for the principal.'
	},
	
	{
		'Q' : 'Sales agent Sally found a home for sale by owner while showing homes to a prospective buyer.  She walked to the door and knocked.  When the owner answered the door she asked if she could show the home to her buyer.  The seller agreed.  Later, the buyer made an offer on the home and it was accepted.  Sally followed through on the transaction with the seller up to closing.  When Sally asked if the seller would pay her a commission, to everyone\'s surprise, the seller agreed.  This would be an example of:',
		'A1' : 'Agency by ratification',
		'A2' : 'Agency by estoppel',
		'A3' : 'Agency by implication',
		'A4' : 'Agency by statute',
		'Correct' : 'A1',
		'Response' : 'This was not a very wise process for Sally, but it worked.  When the potential client agrees to the agency after the agent\'s work is complete, it is called agency by ratification.  Agency by estoppel involves an order from the court, agency by statute requires authorization in the state code, and agency by implication is created by the actions of the agent.  In this case, though Sally was performing the acts of an agent (making her an agent by implication), the after the fact agreement of the seller and payment by the seller made it agency by ratification.'
	},
	
	{
		'Q' : 'For a commercial project, which of the following appraisal reports would most often be appropriate?',
		'A1' : 'Narrative',
		'A2' : 'Short Form',
		'A3' : 'Letter',
		'A4' : 'Comprehensive',
		'Correct' : 'A1',
		'Response' : 'The short form, or checklist, is used by lending institutions for appraisals of residential property.  The letter form is occasionally used by individuals who want an appraiser\'s estimate, but are not interested in supporting information.  In commercial transactions, both buyer and seller often want all the information possible, and that is obtained through a narrative report.'
	},
	
	{
		'Q' : 'Which of the following is NOT an example of obsolescence?',
		'A1' : 'Paint coming off the exterior of the building.',
		'A2' : 'Poor floor plan.',
		'A3' : 'Insufficient insulation in the exterior walls.',
		'A4' : 'Increase of property taxes.',
		'Correct' : 'A1',
		'Response' : 'There are three causes of depreciation.  They are:  1) physical deterioration, 2) external or economic obsolescence, and 3) functional obsolescence.  Physical deterioration is what we have with peeling paint.  Insufficient insulation and the bad floor plans are examples of functional obsolescence, and the inflated property taxes are a perfect example of economic (external) obsolescence. '
	},
	
	{
		'Q' : 'When using the comparison approach, the appraiser is attempting to:',
		'A1' : 'adjust the comparables to the subject property.',
		'A2' : 'adjust the subject property to the comparables.',
		'A3' : 'find a property that is identical to the subject property.',
		'A4' : 'make neighborhood adjustments to determine the value of the property.',
		'Correct' : 'A1',
		'Response' : 'Since real property is homogeneous, meaning that no two properties are the same, the identical idea goes away.  However, the appraiser has the selling price of the comparable and that is where he/she will begin to set the value of the subject property by adjusting the differences between the sold properties and the comparable(s) property.'
	},
	
	{
		'Q' : 'When vertical space in a building is as valuable as horizontal space, the appraiser might be wise to use the:',
		'A1' : 'Cubic foot method',
		'A2' : 'Quantity survey method',
		'A3' : 'Square foot method',
		'A4' : 'Unit-in-place method',
		'Correct' : 'A1',
		'Response' : 'Examples of when volume or cubic measurement is important would be found in warehouses, airplane hangers, auditoriums, etc.  In such instances, air space is just as important as floor space, and therefore the cubic foot method would be ideal.'
	},
	
	{
		'Q' : 'A commercial property lost value when a freeway took traffic away from it.  Recently it was announced that an offramp was going to be built, so the road will now run right in front of this property.  Though no construction has actually begun, the value of the property may immediately increase because of the principle of:',
		'A1' : 'Anticipation',
		'A2' : 'Contribution',
		'A3' : 'Change',
		'A4' : 'Competition',
		'Correct' : 'A1',
		'Response' : 'Though nothing physical has taken place yet, the appraiser should add value to the property in anticipation of what is now a sure thing.  Contribution says the improvements contribute their cost to the value of the property.  Chance has to do with the cycle of value properties go through, and competition has to do with several similar businesses competing in a small area.'
	},
	
	{
		'Q' : 'Mr. McDoddle agrees to lend Mr. Patriot $25,000 at 23% interest.  After the contract is signed, Mr. Patriot learns that the legal limit on interest, as established by the state legislature, is 21%.  This contract would now be considered:',
		'A1' : 'Void, because it lacked legal purpose.',
		'A2' : 'Void, because it lacked consideration.',
		'A3' : 'Void, because it is valid, but unenforceable.',
		'A4' : 'Valid',
		'Correct' : 'A1',
		'Response' : 'When contracts have requirements that are contrary to law, they become void.  This is an example of usury, meaning interest rates that are above the legal limit.'
	},
	
	{
		'Q' : 'If a purchaser fails to complete the purchase of a property, as has been agreed in a fully executed purchase agreement, he may have to forfeit the earnest money deposit because of this clause.',
		'A1' : 'Liquidated damages',
		'A2' : 'Contingency',
		'A3' : 'Constructive',
		'A4' : 'Statute of frauds',
		'Correct' : 'A1',
		'Response' : 'If there is a liquidated damage clause in the purchase contract, then if a party defaults, he/she will have to pay the pre-agreed penalty, which in this case is the earnest money.'
	},
	
	{
		'Q' : 'A paragraph in a contract that indicates things one, or even both, of the parties must accomplish before the contract is considered valid is called a(n):',
		'A1' : 'contingency clause.',
		'A2' : '"as is" clause.',
		'A3' : 'Abrogation.',
		'A4' : 'mediation.',
		'Correct' : 'A1',
		'Response' : 'Basically, a contingency clause is saying this contract will not be in effect until "this" has been accomplished or approved.  An "as is" clause indicates the buyer knows the purchase includes known and/or unknown defects in the property.  Mediation is a method for resolving contract disputes.  Abrogation is a clause which indicates, in the purchase contract, the settlement documents will replace the purchase contract, and it will no longer be in force.'
	},
	
	{
		'Q' : 'Jack and Jill have recently been divorced.  The decree gave the house to Jill.  Since there is no reason for Jack to give any guarantee of title, he will most likely pass his interest in the property with a:',
		'A1' : 'Quit Claim Deed',
		'A2' : 'Special Warranty Deed',
		'A3' : 'General Warranty Deed',
		'A4' : 'Patent Deed',
		'Correct' : 'A1',
		'Response' : 'This situation is often resolved with a quit claim deed.  With this deed, the grantor quits or waives any rights or interest.  A special warranty deed has the Covenant of Seizin and a limited Covenant Against Encumbrances.  The general warranty, or full warranty deed has all five covenants and extends back in time to the patent.  The patent is when the land was passed from public (government) ownership to a private individual.'
	},
	
	{
		'Q' : 'Which of the following describes the Covenant of Quiet Enjoyment?',
		'A1' : 'The purchaser shall not be disturbed in the peaceful possession of the property.',
		'A2' : 'Freedom from distressing noise from an adjoining property owner.',
		'A3' : 'The seller must quietly relinquish possession.',
		'A4' : 'There are no unrecorded encumbrances on the property title.',
		'Correct' : 'A1',
		'Response' : 'This covenant in a deed indicates that no one will hold stronger rights of use and possession than the grantee.  The grantee will not have interference from the former owner, a lessor, or any third party claiming superior title.'
	},
	
	{
		'Q' : 'If a person dies intestate, his estate would be distributed according to the law of:',
		'A1' : 'Descent',
		'A2' : 'Holographic',
		'A3' : 'Testate',
		'A4' : 'Codicils',
		'Correct' : 'A1',
		'Response' : 'If a person dies intestate, his estate would be distributed according to the law of:	Descent	Holographic Testate Codicils	Devise	Wills	In such a case, the heirs still have the right to the estate.  But who gets what will be determined by the law of descent as set forth in the statutes of the state.  A codicil is an addition, or addendum, to an existing will, and a devise is a gift of real property.  You know what a will is!'
	},
	
	{
		'Q' : 'Which of the following fits one of the added classes from the 1988 Fair Housing Amendments Act?',
		'A1' : 'A paraplegic.',
		'A2' : 'A black person.',
		'A3' : 'A person 62 years old.',
		'A4' : 'A Catholic.',
		'Correct' : 'A1',
		'Response' : 'The amendment of 1988 added two protected classes: handicapped, which would include a paraplegic, and familial status which protected families with young children under 18.'
	},
	
	{
		'Q' : 'Which of the following requires a booklet be given to the consumer within three days of application for a loan:',
		'A1' : 'RESPA',
		'A2' : 'Reg. Z',
		'A3' : 'UCC',
		'A4' : 'EPA',
		'Correct' : 'A1',
		'Response' : 'The booklet is called Settlement Costs and You and is required by the Real Estate Settlement Procedures Act (RESPA).'
	},
	
	{
		'Q' : 'To be in compliance with the Do Not Call rules, a brokerage must scrub their potential contacts\' phone numbers against the national registry at least:',
		'A1' : 'Monthly',
		'A2' : 'Weekly',
		'A3' : 'Quarterly',
		'A4' : 'Twice a year',
		'Correct' : 'A1',
		'Response' : 'The list phone numbers are checked against must be updated regularly.  The rule requires updating the list used within the brokerage monthly.'
	},
	
	{
		'Q' : 'What entity identifies an area as a floodplain, and therefore as requiring flood insurance?',
		'A1' : 'FEMA',
		'A2' : 'URED',
		'A3' : 'RESPA',
		'A4' : 'TIL',
		'Correct' : 'A1',
		'Response' : 'FEMA is the Federal Emergency Management Agency.  URED could be Utah Real Estate Division, both RESPA and TIL are laws governing disclosure in the granting of loans (Real Estate Settlement Procedures Act and Truth in Lending).'
	},
	
	{
		'Q' : 'The clause that protects borrowers by assuring them the lender will reconvey all interest in the property after the borrower has made final payment, is which of the following?',
		'A1' : 'Defeasance clause',
		'A2' : 'Acceleration clause',
		'A3' : 'Subordination clause',
		'A4' : 'Release clause',
		'Correct' : 'A1',
		'Response' : 'When a borrower makes the last payment on a loan, the defeasance clause requires the lender to reconvey all interest in the property back to the owner.  In effect, this is a release of lien.  A Satisfaction of Mortgage or Reconveyance of Deed would be recorded. The acceleration clause calls the loan due and payable now, subordination has to do with priority, and release allows for a portion of the property to be released as collateral.'
		},
		
	{
		'Q' : 'A clause that allows two lenders to switch priority positions, such as the first mortgage becoming the second, and the second mortgage becoming the first mortgage is called a(n):',
		'A1' : 'Subordination clause',
		'A2' : 'Acceleration clause',
		'A3' : 'Alienation clause',
		'A4' : 'Defeasance clause',
		'Correct' : 'A1',
		'Response' : 'The purpose of a subordination clause is to alter priority exactly as was described in the question.  The acceleration clause calls the loan due and payable and is the first step in foreclosure.  The alienation clause means you must pay off the loan when you sell, and the defeasance clause calls for the lender to reconvey interest when the loan is paid off.'
	},
	
	{
		'Q' : 'This organization does not set interest rates, but because of the discount rate and the amount of money lenders are required to keep on reserve for depositors, they heavily influence the interest rate.  The organization is:',
		'A1' : 'The Federal Reserve',
		'A2' : 'FNMA (Federal National Mortgage Association)',
		'A3' : 'GNMA (Government National Mortgage Association)',
		'A4' : 'FDIC (Federal Deposit Insurance Corporation)',
		'Correct' : 'A1',
		'Response' : 'This is a good definition of the Federal Reserve.  FNMA and GNMA both operate in the secondary money market.  The FDIC insures deposits for member banks.'
	},	
	
	{
		'Q' : 'The higher the LTVR, the greater the:',
		'A1' : 'Leverage',
		'A2' : 'Equity',
		'A3' : 'Discount Rate',
		'A4' : 'Usury',
		'Correct' : 'A1',
		'Response' : 'A high LTVR means the loan(s) is a high percentage of the property\'s.  When the purchaser uses a small down payment, then leverage is great.  Leverage and equity equal 100%.  The discount rate is what the Federal Reserve charges member banks to borrow money, and usury is an outrageous and illegal rate of interest.'
	},
	
	{
		'Q' : 'A column of townships running North and South, and counted East and West from the meridian is called a:',
		'A1' : 'Range',
		'A2' : 'Acre',
		'A3' : 'Section',
		'A4' : 'Tier',
		'Correct' : 'A1',
		'Response' : 'Tiers run east and west and are counted north or south from the principal baseline.  Ranges are located exactly as stated in question.'
	},
	
	{
		'Q' : 'A township could be accurately described as',
		'A1' : 'a six mile square.',
		'A2' : '43,560 square feet.',
		'A3' : '640 acres.',
		'A4' : 'six square miles.',
		'Correct' : 'A1',
		'Response' : 'A township is six miles by six miles or in other words, a six-smile square.  Six square miles could be a parcel of land that is 2 miles wide and 3 miles long, thus 2 X 3 = 6 square miles.  There are 640 miles in a section, and 43,560 square feet in an acre.'
	},
		
	{
		'Q' : 'Tim enters into an agreement with George that he will harvest George\'s wheat if he can keep one-third of the wheat.  This agreement would be termed a less than freehold interest for:',
		'A1' : 'Profit',
		'A2' : 'License',
		'A3' : 'Lease',
		'A4' : 'Emblements',
		'Correct' : 'A1',
		'Response' : 'Since Tim has a right to enter the property, but not to occupy it, it would not be a lease.  Since the agreement is fixed and cannot be arbitrarily terminated by either party, it is not a license.  The term emblements refer to crops that are considered personal property in a sale and therefore the term is not appropriate in a lease.'
	},
		
	{
		'Q' : 'The legal process in court to evict a tenant is called a(n):',
		'A1' : 'Unlawful detainer',
		'A2' : 'Actual eviction action',
		'A3' : 'Writ of habeas corpus',
		'A4' : 'Writ of eviction',
		'Correct' : 'A1',
		'Response' : 'This is just a matter of fact.  When the lessor evicts the lessee it is actual eviction, not constructive eviction, but they have to go to court to do so.  The first step is the notice to quit.  If the landlord wins in court, the court will issue a writ of eviction and the sheriff puts the tenant out.'
	},	
	
	{
		'Q' : 'Constructive eviction is based primarily on:',
		'A1' : 'habitability',
		'A2' : 'ownership',
		'A3' : 'non-payment of rent',
		'A4' : 'tenant destruction of property',
		'Correct' : 'A1',
		'Response' : 'The word constructive can be confusing because the word itself is not much of a clue.  Constructive eviction is the right of a tenant to evict himself, without being responsible to fulfill the remaining terms of the lease.  To make it a valid act, the tenant would have to prove that the lessor had violated the clause of habitability.'
	},
	
	{
		'Q' : 'Under an exclusive right-to-sell listing, a broker has earned a commission when:',
		'A1' : 'a purchaser is found who is ready, willing and able to buy the property at the seller\'s terms',
		'A2' : 'the property is listed',
		'A3' : 'the purchaser hands the broker an earnest money deposit',
		'A4' : 'title to the property is transferred at closing',
		'Correct' : 'A1',
		'Response' : 'The listing agreement does not require the agent to sell the property, but to find a buyer for the seller.  When this is accomplished, the seller owes a commission.  Most listings also state the broker will wait to collect the commission until closing.'
	},
	
	{
		'Q' : 'When the sellers can list with as many real estate companies as they want, and then pay a commission to whichever one brings an acceptable offer, the listing is called a(n):',
		'A1' : 'Open listing',
		'A2' : 'Exclusive right to sell listing with exclusions',
		'A3' : 'Exclusive agency listing',
		'A4' : 'Net listing',
		'Correct' : 'A1',
		'Response' : 'This is the definition of an open listing.  It\'s main characteristic is that it is non-exclusive.'
	},
	
	{
		'Q' : 'If a trustor wanted to give the property back to the lender in exchange for having the loan forgiven and canceled, and if the lender would agree, this would be accomplished with a:',
		'A1' : 'Deed in lieu of foreclosure',
		'A2' : 'Installment sales contract',
		'A3' : 'Mortgage',
		'A4' : 'Trust deed and note',
		'Correct' : 'A1',
		'Response' : 'A deed in lieu of foreclosure solves the problem in the manner described and no foreclosure sale is held.  The other answers could all lead to a foreclosure process of some kind.'
	},
	
	{
		'Q' : 'The advantage for the lender when a land contract is used, is that in the event of default by the buyer, the lender has the possibility of a process called:',
		'A1' : 'Forfeiture',
		'A2' : 'Hypothecation',
		'A3' : 'Estoppel',
		'A4' : 'Cancellation',
		'Correct' : 'A1',
		'Response' : 'Repossession of real property by the lender is called forfeiture to the borrower.  It is highly discouraged in states that emphasize lien theory.  Hypothecation is using something as collateral, but not giving up possession.  Estoppel is a legal term that does not relate to the foreclosure process.'
	},
	
	{
		'Q' : 'Jeff paid Mike $750 for the right to buy or not buy his property, and for Mike to take the property off the market.  They each signed a contract to confirm their intentions.  This is an example of a(n):',
		'A1' : 'Option',
		'A2' : 'Right of first refusal',
		'A3' : 'Exclusive agency',
		'A4' : 'Listing agreement',
		'Correct' : 'A1',
		'Response' : 'This is a very good example of an option.  Note that consideration for the option was included.  With a right of first refusal there may or may not be consideration, but the property won\'t be withdrawn from the market.  This is definitely not a listing.'
	},
	
	{
		'Q' : 'Which of these would be a reasonable use of an option?',
		'A1' : 'Lease with an option to purchase.',
		'A2' : 'Purchase with an option to lease.',
		'A3' : 'First mortgage with an option for a second mortgage.',
		'A4' : 'Easement with an option to purchase.',
		'Correct' : 'A1',
		'Response' : 'Though there are various viable uses for an option, one of the most common is when a prospective buyer, with insufficient funds for a down payment, will arrange a lease with a built in option to purchase.  The other choices would be unlikely situations.'
	},
	
	{
		'Q' : 'When all partners are general partners, the organization is considered to be a:',
		'A1' : 'General Partnership',
		'A2' : 'Limited Partnership',
		'A3' : 'Joint Venture',
		'A4' : 'Corporation',
		'Correct' : 'A1',
		'Response' : 'When all partners are general, it is a general partnership.  If there are one or more limited partners, it is a limited partnership.  Joint venture is a temporary partnership of several entities for a particular purpose, and a corporation is a legal person, not a partnership.'
	},
	
	{
		'Q' : 'Helga was asked by a lender to produce the title to her property.  In response she might have:',
		'A1' : 'explained that the title was incorporeal.',
		'A2' : 'replied she would have it first thing Monday morning.',
		'A3' : 'produced the deed, explaining that a deed and a title are one and the same thing.',
		'A4' : 'said he would have to go to the county recorder\'s office to see the actual title.',
		'Correct' : 'A1',
		'Response' : 'Title is incorporeal, meaning intangible.  A deed is corporeal or tangible.  Title means vesting of ownership, but the deed is the tangible evidence that title has actually passed from a grantor to a grantee.'
	},
	
	{
		'Q' : 'When two or more parties combine their efforts to create a business project, this initial effort is called a:',
		'A1' : 'joint venture.',
		'A2' : 'corporation.',
		'A3' : 'partnership.',
		'A4' : 'sole ownership.',
		'Correct' : 'A1',
		'Response' : 'Think of it this way, some one with an adventurous idea went looking for someone with some adventurous money.  When they came together for the project, they created a joint venture.  In a joint venture you have several entities working together.  Those entities could be a variety of sole ownership, partnerships, and/or corporations.'
	},
	
	{
		'Q' : 'The right to use and possess the property free from interference from the previous owner or lessors or anyone else claiming a stronger right is called:',
		'A1' : 'Quiet enjoyment.',
		'A2' : 'Fee simple qualified',
		'A3' : 'Tacking',
		'A4' : 'Title',
		'Correct' : 'A1',
		'Response' : 'The question perfectly describes the rights of quiet enjoyment.  Fee simple qualified is ownership with strings attached.  Tacking is several adverse possession periods linked together, and title is an abstract term that means ownership.ss'
	},
	
	{
		'Q' : 'When an owner has no way to get to his property, his property is said to be:',
		'A1' : 'Landlocked',
		'A2' : 'Negatively ingressed',
		'A3' : 'Without access in gross',
		'A4' : 'Road rotted',
		'Correct' : 'A1',
		'Response' : 'This is obviously a landlocked property.  The other terms do not even exist in the context of public and private control of real property.'
	},	
	
	{
		'Q' : 'Mr. Salt gave written permission to Mr. Pepper to enter his property, drive to the lake on Salt\'s property and fish whenever he wanted.  This right would be called a(n):',
		'A1' : 'Easement in gross',
		'A2' : 'Easement appurtenant',
		'A3' : 'Prescriptive easement',
		'A4' : 'Merger',
		'Correct' : 'A1',
		'Response' : 'Easements appurtenant run with the land or the deed.  Easements in gross run with the persons or the need.  This right of easement is between Mr. Salt and Mr. Pepper.  If Salt sold the property the easement would not be enforceable on the new owner.  Since all is being done with the agreement of Mr. Salt it could not create a prescriptive easement.  Nothing here suggests a merger.'
	},
	
	{
		'Q' : 'If someone wanted to obtain a variance for their property, they would apply to the:',
		'A1' : 'board of adjustment',
		'A2' : 'planning and zoning committee',
		'A3' : 'state zoning commission',
		'A4' : 'city or county planning council',
		'Correct' : 'A1',
		'Response' : 'Cities and counties set up a board of adjustment to hear appeals and applications for variations from the zoning regulations.'
	},
		
	{
		'Q' : 'If an item has been severed from real property, it would NOT be considered which of the following?',
		'A1' : 'Appurtenant',
		'A2' : 'Chattel',
		'A3' : 'Personalty',
		'A4' : 'Personal Property',
		'Correct' : 'A1',
		'Response' : 'Since it is no longer attached to the real property, it is not appurtenant.  Chattel and personalty are synonyms for personal property.'
	},
	
	{
		'Q' : 'Which of the following would be considered chattel?',
		'A1' : 'Tractor',
		'A2' : 'Water right',
		'A3' : 'Barn',
		'A4' : 'Fence',
		'Correct' : 'A1',
		'Response' : 'The fence and the barn are obvious examples of real property.  Though water shares are classified as personal property, water rights and mineral rights are examples of real property.  Since chattel is a synonym for personal property, the tractor is the only thing on this list that is personal property.'
	},
	
	{
		'Q' : 'Which of the following is an economic rather than a physical characteristic of real property?',
		'A1' : 'Area preferences -- a situs',
		'A2' : 'Indestructibility',
		'A3' : 'Immobility',
		'A4' : 'Nonhomogeneity',
		'Correct' : 'A1',
		'Response' : 'In addition to the location or situs, improvements to the land and scarcity are considered economic characteristics of real property.  The other three listed here are physical characteristics.'
	},
	
	{
		'Q' : 'If a cabinet in a house is a fixture, which of the following is true?',
		'A1' : 'Title to it passes to the buyer upon the sale of the house.',
		'A2' : 'It is not pledged as security for any mortgage loan.',
		'A3' : 'It is not part of the assessed value of the property for tax purposes.',
		'A4' : 'It will pass to the new owner only if the Real Estate Purchase Contract says it will',
		'Correct' : 'A1',
		'Response' : 'Once the cabinet was determined to be a fixture, it passes with the deed and is part of the value created for the security for any mortgage.  It passes to the new owner because it is real property.'
	},
	
	{
		'Q' : 'The statutory period of standard notice is:',
		'A1' : '15 days',
		'A2' : '5 days',
		'A3' : '10 days',
		'A4' : '30 days	',
		'Correct' : 'A1',
		'Response' : 'The lessor and lessee can mutually agree to any term of notice they desire.  However, if there is nothing in the contract about it, they fall back on the law, which is 15 days prior to the renewal period.'
	},
	
	{
		'Q' : 'The appraised value of a property for tax purposes is set by:',
		'A1' : 'the county assessor.',
		'A2' : 'a  fee appraiser.',
		'A3' : 'the county treasurer.',
		'A4' : 'the tax commission.',
		'Correct' : 'A1',
		'Response' : 'A fee appraiser is hired for a fee by lenders, administrators of estates, or others who want to know the value of real property.  The county tax assessor is "assessing the value" of the property for tax purposes.'
	},
	
	{
		'Q' : 'Which of the following entities has the right to levy taxes based on the value of real property?',
		'A1' : 'The state',
		'A2' : 'The city',
		'A3' : 'The county',
		'A4' : 'The taxing district',
		'Correct' : 'A1',
		'Response' : 'This is a state right, but is usually delegated down to the local level.'
	},
	
	{
		'Q' : 'In Utah, to help keep people from losing their homes to rising property taxes, certain properties are assessed taxes not on the full 100% of value, but the tax rate is multiplied against a portion of the value.  This only applies to a primary residence.  The taxes are reduced by how much?',
		'A1' : '55%',
		'A2' : '45%',
		'A3' : '33 1/3%',
		'A4' : '50%',
		'Correct' : 'A1',
		'Response' : 'Multiply the assessed value of the home by 55% to determine the number to multiply by the tax rate.  This equals a 45% reduction in tax.  This does not apply to second homes, vacation homes, etc.'
	},
	
	{
		'Q' : 'Which of the these statements is accurate regarding the rental deposits made when tenants entered into a lease agreement in an apartment building.',
		'A1' : 'They belong to the tenants, but if the building is sold, will be transferred to the new owner to hold.',
		'A2' : 'If the building is sold, the prorated portion of the deposits is reflected on the closing documents.',
		'A3' : 'The deposits belong to the owner of the building.',
		'A4' : 'They belong to the tenants, and if the building is sold, will be returned to the tenants.',
		'Correct' : 'A1',
		'Response' : 'The deposits belong to the lessees (tenants) and are held by the current owner until a tenantís lease expires.  If part or all of it must be used for damages or cleaning, the landlord will keep the deposit and give the tenant an accounting. Otherwise, it will be returned to the tenant. The owner of the building holds the deposits, so if the property is sold, the deposits will be transferred from the previous owner (seller) to the new owner (buyer). Usually this is done at closing, but occasionally is handled separately.'
	},
	
	{
		'Q' : 'The least number of years that can be used for computing cost recovery for residential investment property is:',
		'A1' : '27.5',
		'A2' : '31.5',
		'A3' : '39',
		'A4' : '15',
		'Correct' : 'A1',
		'Response' : 'It\'s the way it is:  27.5 fewest years for residential, 39 for commercial.'
	},
	
	{
		'Q' : 'Regarding your personal residence, you can deduct which of the following on your income tax each year?',
		'A1' : 'Interest',
		'A2' : 'Repairs',
		'A3' : 'Improvements',
		'A4' : 'Depreciation',
		'Correct' : 'A1',
		'Response' : 'Of these choices, interest is the only one that can be deducted.  Repairs and depreciation would be deductions for income property.  Improvements are capitalized for investment property or deducted from the sales price for a personal residence.'
	},
	
	{
		'Q' : 'Which of the following would give a buyer the greatest protection, so far as title is concerned?',
		'A1' : 'Extended title policy',
		'A2' : 'Standard title policy',
		'A3' : 'Attorney\'s opinion',
		'A4' : 'Abstract of title',
		'Correct' : 'A1',
		'Response' : 'The standard policy is used most often, but only protects against things of record.  An extended policy for a buyer/borrower is most like the lender\'s policy, which includes problems that could be found in a site visit, including possible mechanic\'s liens.  An abstract or chain of title is a history of title.  It has no guarantees, and the attorney\'s opinion is rendered after the research has been done on the abstract.'
	},
	
	{
		'Q' : 'Which of the following would be the most expensive title insurance coverage for the seller to purchase to insure the buyer?',
		'A1' : 'Extended policy',
		'A2' : 'Plain language policy',
		'A3' : 'ALTA policy',
		'A4' : 'Standard policy',
		'Correct' : 'A1',
		'Response' : 'The standard policy and plain language policy usually cost the same.  The ALTA, or lender\'s policy, is only available to cover lenders.  An extended policy is more expensive and is essentially the same coverage the lender gets, but is for the full purchase price vs. the lender\'s coverage being in the amount of the loan.'
	}
);

//General 5
questions[4] = new Array(

	{
		'Q' : 'When buyers do not enter into a buyer agency agreement with a broker, they are likely in a condition called:',
		'A1' : 'caveat emptor',
		'A2' : 'ratification',
		'A3' : 'estoppel',
		'A4' : 'lis pendens',
		'Correct' : 'A1',
		'Response' : 'Caveat emptor means "let the buyer beware."  Caveat emptor suggests that the parties are on their own and use due diligence to look out for their own interests.  With payment, a principal in an implied agency relationship ratifies the agency.  Estoppel is agency created by the court, and lis pendens is a recorded document giving notice of a pending legal action. '
	},
	
	{
		'Q' : 'A property manager would be considered which of the following types of agent?',
		'A1' : 'General',
		'A2' : 'Specific',
		'A3' : 'Unilateral',
		'A4' : 'Universal',
		'Correct' : 'A1',
		'Response' : 'Property managers are typically granted a wide range of authority to conduct their activities on behalf of the property owner in a productive manner, and to meet the owner\'s objectives.  However, though they have a greater level of freedom than a specific agent, they are far from having the total control given to a universal agent.  There is no such thing as a unilateral agent.'
	},
	
	{
		'Q' : 'Agent Kate was authorized in writing by her principal to not only perform the usual duties of a real estate agent in behalf of the seller, but to sign a purchase contract and other documents on behalf of her client.  In the capacity to sign those documents, Kate was acting as an:',
		'A1' : 'attorney in fact.',
		'A2' : 'agent by estoppel.',
		'A3' : 'attorney at law.',
		'A4' : 'agent by ratification.',
		'Correct' : 'A1',
		'Response' : 'This clearly describes the process of becoming an attorney in fact.  Though she obviously had been empowered to do many tasks as a real estate agent, the power of the signature is unique to one who has a power of attorney.  Remember, the person is an "attorney in fact" because a document gave them "power" to sign for another.  Since Kate\'s right to use this power was limited to the sale of the property, she held a specific power of attorney and not a general power of attorney.'
	},
	
	{
		'Q' : 'Mr. Kelly is trying to decide if he should put in a $25,000 swimming pool to increase the value of his property.  He should give consideration to which of the following principles of appraisal?',
		'A1' : 'Contribution',
		'A2' : 'Substitution',
		'A3' : 'Conformity',
		'A4' : 'Anticipation',
		'Correct' : 'A1',
		'Response' : 'Though all the principles are important, in this particular situation, Mr. Kelly had better ask himself if someone purchasing the property will be willing to pay an additional $25,000 or more for his property because it has a swimming pool.  Best case scenario, the home will sell for more than without a pool, but most likely not for $25,000 more.  The added improvement "contributes" to the value of the property.  Substitution is no buyer will pay more than necessary to get what he/she wants.  Conformity is all properties in the neighborhood are of similar style and size.  Anticipation is when the appraiser takes into consideration known events such as a large new company locating in the area.'
	},
	
	{
		'Q' : 'Land is given as a separate value in which of the following appraisal methods?',
		'A1' : 'Cost replacement',
		'A2' : 'Market data',
		'A3' : 'Income or capitalization',
		'A4' : 'Land is never given a separate value.',
		'Correct' : 'A1',
		'Response' : '	Market data looks at comparable properties, capitalization is concerned with cash flow on the property, but the formula for the cost approach is:  Land (a separate value) plus improvements, minus depreciation.'
	},
	
	{
		'Q' : 'In determining the value of an income property, the appraiser is most interested in:',
		'A1' : 'cash flow.',
		'A2' : 'Location.',
		'A3' : 'interest rates.',
		'A4' : 'future projections of future expenses and rents.',
		'Correct' : 'A1',
		'Response' : 'Though location and interest rates are certainly influences in value of income properties and the establishment of an appropriate cap rate (rate of capitalization), the basis of the value using the income approach is going to be the cash flow.'
	},
	
	{
		'Q' : 'In effect, the appraiser is trying to answer the question, "How much would a buyer pay for the cash flow this property generates?" The appraiser had learned that according to the cost approach, the property was worth $145,000, the comparison approach $148,800, and the income approach indicated a price tag of $152,300.  Since the appraiser must state the value as a single number he/she would now use the process of:',
		'A1' : 'Reconciliation',
		'A2' : 'Averaging',
		'A3' : 'Subjective estimation',
		'A4' : 'Capitalization',
		'Correct' : 'A1',
		'Response' : 'To boil these conflicting results down to a single number, the appraiser uses the process of reconciliation.  The appraiser would never take these three values and average them.  Capitalization is used with investment properties to determine value by capitalizing the NOI.'
	},
	
	{
		'Q' : 'Sometimes a current use of a property has run its course and the property value could be greatly enhanced by tearing down the improvement and starting over with a completely different use.  This process in an area, which could take decades to accomplish, is called the principle of:',
		'A1' : 'Change',
		'A2' : 'Anticipation',
		'A3' : 'Competition',
		'A4' : 'Contribution',
		'Correct' : 'A1',
		'Response' : 'This is the principle of change.  A good example might be a subdivision that was built and many years later became a shopping center.  When the subdivision was being built it was in growth or integration.  When all the homes had been completed it passed into the equilibrium state.  As the neighborhood began to run down it passed through the deterioration stage.  Then, when things were bad enough, they destroyed the subdivision and began the integration stage again with the shopping center.'
	},
	
	{
		'Q' : 'When Mr. Vegas, the buyer, asked Mr. Atlantic, the seller, about the condition of the basement, the seller replied that it was in perfect condition.  All the while he knew the basement leaked when there were heavy rains.  The courts would consider this an example of:',
		'A1' : 'positive intentional fraud.',
		'A2' : 'passive fraud.',
		'A3' : 'constructive fraud.',
		'A4' : 'puffing.',
		'Correct' : 'A1',
		'Response' : 'Intentional lies are considered positive fraud, withholding of information is negative, or passive fraud.  Constructive fraud is when you didn\'t mean to misrepresent, and puffing is "advertising" talk or exaggerating the qualities (most beautiful home in the valley).'
	},
	
	{
		'Q' : 'The use of duress, menace, or undue influence can cause a contract to be:',
		'A1' : 'voidable',
		'A2' : 'void',
		'A3' : 'bilateral',
		'A4' : 'unilateral',
		'Correct' : 'A1',
		'Response' : 'The three things mentioned can create voidable contracts.  Remember, a voidable contract is a contractual situation wherein one party can successfully challenge the existence of one or more of the essential elements, and thereby obtain the right to either void or affirm the contract.  The other party has to accede to that decision.  With duress, menace, or undue influence, true mutual agreement was not achieved.'
	},
	
	{
		'Q' : 'If the court orders one of the parties to complete the contract as agreed, that order would be an example of:',
		'A1' : 'specific performance.',
		'A2' : 'liquidated damages.',
		'A3' : 'damages.',
		'A4' : 'rescission.',
		'Correct' : 'A1',
		'Response' : 'The court didn\'t order the payment of money for actual losses (damages), or order the penalty specified in the contract to be levied (liquidated damages), but ordered that the terms of the contract be carried out (specific performance).  Rescission is an agreement between the parties to end the contract.'
	},
	
	{
		'Q' : 'Which of the following deeds would be most desirable as seen from the perspective of the buyer?',
		'A1' : 'General Warranty Deed',
		'A2' : 'Special Warranty Deed',
		'A3' : 'Quit Claim Deed',
		'A4' : 'Bargain and Sale Deed',
		'Correct' : 'A1',
		'Response' : 'The general warranty deed provides all five warranties possible on a deed and extends back in time to the patent.  A special warranty deed gives the Covenant of Seizin and a limited Covenant Against Encumbrances, while the quit claim deed gives no warranties at all.  The bargain and sale deed only has an implied guarantee that the grantor had some kind of interest in the property.'
	},
	
	{
		'Q' : 'What clause means "to have and to hold" or "subject to," and defines the extent of a transfer of real property?',
		'A1' : 'Habendum clause',
		'A2' : 'Escalator clause',
		'A3' : 'Escheat clause',
		'A4' : 'Notice of Interest clause',
		'Correct' : 'A1',
		'Response' : 'If the deed is not going to pass title to all the real property inside the boundaries, it must be stated what is going to be excluded, such as mineral rights.  The words that specify that restriction are called the habendum clause.  An escalator clause increases rents or loan payments.  Escheat is a government right to property when one dies without a will or heirs.  The holder of a junior lien would record a Notice of Interest to be notified automatically if another lien holder initiated foreclosure.'
	},
	
	{
		'Q' : 'Title is:',
		'A1' : 'Actual ownership, and is incorporeal.',
		'A2' : 'Evidence of ownership and is corporeal.',
		'A3' : 'Always recorded and corporeal.',
		'A4' : 'Used on cars, but not with real property.',
		'Correct' : 'A1',
		'Response' : 'The word "title" is an abstract term when related to real property, denoting ownership.  The deed is the tangible evidence of that ownership.  The title is incorporeal (intangible), while the deed is corporeal (tangible).'
	},
	
	{
		'Q' : 'The Americans with Disabilities Act covers all the following situations except:',
		'A1' : 'A person who is addicted to illegal drugs.',
		'A2' : 'A mobility impaired person seeking employment.',
		'A3' : 'A blind person who would need to have the seeing eye dog at work.',
		'A4' : 'A wheelchair bound person desiring to attend the theatre.',
		'Correct' : 'A1',
		'Response' : 'The law never intends to protect those guilty of breaking other laws.  Individuals with handicaps have long suffered at the hands of those who are not.  It is sad that laws are needed to protect them.  But that is the way it is.  Since 1988 they have a measure of protection and equal rights and access.'
	},
	
	{
		'Q' : 'Six real estate brokers met and decided to increase their commission rate to 8%.  Since they were cooperating with each other, their chances of successfully achieving this increase were greatly enhanced.  However, if they were caught doing this, they would be prosecuted under what act?',
		'A1' : 'Sherman Antitrust Act',
		'A2' : 'The environmental impact statement (EIS)',
		'A3' : 'Uniform Commercial Code (UCC)',
		'A4' : 'Federal Fair Housing Act of 1968',
		'Correct' : 'A1',
		'Response' : 'These people are guilty of price fixing, a practice specifically outlawed in the Sherman Antitrust Act.  The EIS under the direction of the EPA has to do with environmental issues, the UCC with the sale of personal property, and the Fair Housing Act with illegal discrimination.'
	},
	
	{
		'Q' : 'In relation to Do Not Call rules, which of the following things is NOT a requirement?',
		'A1' : 'Calls must be made between 7 am and 10 pm',
		'A2' : 'Transmit caller ID information',
		'A3' : 'Let the phone ring 4 rings, or 15 seconds',
		'A4' : 'If someone asks, put them on your own Do Not Call list',
		'Correct' : 'A1',
		'Response' : 'This is blockbusting, or "panic peddling" as it is sometimes called.  Steering is a discriminatory practice usually done by real estate agents who are directing clients to or away from certain geographical areas,  redlining is an illegal practice by lenders, and price fixing is illegally manipulating prices for services and products such as real estate commissions.'
	},
	
	{
		'Q' : 'What is the nickname for CERCLA ?',
		'A1' : 'Superfund Act',
		'A2' : 'Waste Cleanup',
		'A3' : 'Hazardous Waste Liability',
		'A4' : 'Toxic Responsibility',
		'Correct' : 'A1',
		'Response' : 'This is simply what it is!  The actual name is the Comprehensive Environmental Response, Compensation & Liability Act.  Superfund Act is a lot easier to remember, isn\'t it!'
	},
	
	{
		'Q' : 'What do you call the difference between the total value of a property and the liens against the property?',
		'A1' : 'Equity',
		'A2' : 'Loan to value ratio',
		'A3' : 'Leverage',
		'A4' : 'Participation',
		'Correct' : 'A1',
		'Response' : 'Equity is the answer.  Equity is the portion of value in the property that belongs to the owner.  Loan to value ratio is the opposite.  It\'s the portion of the value tied up as security for loans.  The two should always equal 100%.  Leverage is the principal of using as little of one\'s own money and as much of other people\'s to buy property.  Participation loan is when the lender not only gives the loan, but is a part owner.'
	},
	
	{
		'Q' : 'Which of the following does the FHA  do?',
		'A1' : 'Approve and regulate FHA loans.',
		'A2' : 'Build homes for underprivileged people.',
		'A3' : 'Pay lenders for their loss when an FHA loan is foreclosed.',
		'A4' : 'Use tax money to insure loans.',
		'Correct' : 'A1',
		'Response' : '	The Federal Housing Administration (FHA) does not make loans, or insure loans.  They simply approve lenders to give FHA loans and set and enforce the rules and regulations lenders and borrowers must follow.  The mortgage insurance for FHA loans is paid for by the borrower.'
	},
	
	{
		'Q' : 'A loan that requires payments which include both principal and interest, and a  final payment that includes a balloon payment would be an example of a(n):',
		'A1' : 'Partially amortized mortgage',
		'A2' : 'Fully amortized mortgage',
		'A3' : 'Adjustable rate mortgage',
		'A4' : 'Straight or term note',
		'Correct' : 'A1',
		'Response' : 'Since principal is being paid in each payment it could not be a straight note.  Because it has a balloon payment it couldn\'t be fully amortized.  Nothing in the question indicated an adjustable rate, so the only thing it could be is a partially amortized mortgage.  A straight or term loan would be payments of interest only.'
	},
	
	{
		'Q' : 'With an adjustable rate loan, what would keep the payments from going up and up and up as the interest rate is adjusted each year?',
		'A1' : 'Cap',
		'A2' : 'Margin',
		'A3' : 'Index',
		'A4' : 'Period',
		'Correct' : 'A1',
		'Response' : 'There is a periodic cap and a lifetime cap to put a lid on the amount the interest rate can increase.  The margin is the amount to be added to the index.  The index is a financial indicator used in determining if the interest will go up or down, and the period is the defined time for readjusting the interest rate.  All answers relate directly to adjustable rate mortgages (ARM\'s).'
	},
	
	{
		'Q' : 'How many acres are there in the parcel of land described as: "The NW 1/4 of the SE 1/4 of the E 1/2 of Section 21."',
		'A1' : '1,361',
		'A2' : '20',
		'A3' : '1.13 ',
		'A4' : '165',
		'Correct' : 'A1',
		'Response' : 'The basic fact necessary to solve this is that there are 640 acres in a section.  The rule is to divide 640 by each of the denominators in the description.  In this case, the arithmetic would be 640 ˜ 4 ˜ 4 ˜ 2 =  20 acres.'
	},
	
	{
		'Q' : 'It would be correct to say that an acre:',
		'A1' : 'has 43,560 square feet.',
		'A2' : 'is the equivalent of one section.',
		'A3' : 'has 640 square feet',
		'A4' : 'is larger than a section, but smaller than a township.',
		'Correct' : 'A1',
		'Response' : 'A township is the largest parcel used in the rectangular survey.  A section is the next largest and an acre is 1/640 of a section.  So in this method of land measurement, an acre is relatively small, consisting of only 43,560 square feet which would be a square 208.7 feet by 208.7 feet.'
	},
	
	{
		'Q' : 'In a sublease, the sublettee owes rent to the:',
		'A1' : 'sublettor',
		'A2' : 'landlord',
		'A3' : 'property owner',
		'A4' : 'no one',
		'Correct' : 'A1',
		'Response' : 'In a sublease, the sublettor owes rent to the sublettor, who is the lessee and is still responsible to pay rent to the lessor.'
	},
	
	{
		'Q' : 'A leasehold interest in real property conveys a right of:',
		'A1' : 'Possession',
		'A2' : 'Fee simple',
		'A3' : 'Defeasible fee',
		'A4' : 'Qualified possession',
		'Correct' : 'A1',
		'Response' : 'A leasehold interest gives the lessee the right to enter and occupy the property (right of possession), but no ownership interest of any kind.  Fee simple, and defeasible fee, are forms of ownership.  Qualified possession is not a real estate term.'
	},
	
	{
		'Q' : 'Which of the following best describes the legal status known as a lease?',
		'A1' : 'Right of possession in someone else\'s property',
		'A2' : 'A written contract for a specific period of time',
		'A3' : 'An arrangement to rent property for a year or more',
		'A4' : 'A written agreement to live somewhere',
		'Correct' : 'A1',
		'Response' : 'A lease is an estate or right of possession.  It may or may not be written, and it can be for any period of time, or a tenancy at will, or periodic tenancy.'
	},
	
	{
		'Q' : 'Which of the following listings are considered illegal or prohibited?',
		'A1' : 'Net listing',
		'A2' : 'Exclusive right-to-sell listing',
		'A3' : 'Exclusive agency listing',
		'A4' : 'Open listing',
		'Correct' : 'A1',
		'Response' : 'Net listing is the answer.  This listing states a selling price for the seller.  If the agent can sell the property for more than that price the brokerage can keep the difference as commission.  A net listing provides an easy way for an unethical agent to dupe the seller, therefore they are illegal and prohibited.'
	},
	
	{
		'Q' : 'Procuring cause is a legal doctrine that states:',
		'A1' : 'The agent that initiates an unbroken chain of events that leads to the closing earns the selling portion of the commission',
		'A2' : 'The agent that shows the property to the eventual buyer first earns the selling portion of the commission.',
		'A3' : 'The agent who represents both the seller and the buyer has a right to selling portion of the commission.',
		'A4' : 'The agent who in court sues for a commission and wins has achieved the procuring cause.',
		'Correct' : 'A1',
		'Response' : 'If all agents clarify their agency agreements in writing early on, there hopefully won\'t be many of these disputes.'
	},
	
	{
		'Q' : 'With a trust deed and note, the trustor conveys to the trustee:',
		'A1' : 'Power of Sale',
		'A2' : 'Power of Lien',
		'A3' : 'Power of Attorney',
		'A4' : 'Power of Foreclosure',
		'Correct' : 'A1',
		'Response' : 'In order for trustees (third party) to conduct a valid sale of the property, they must have received the power of sale from the owner of the property (trustor). Though anyone holding a power of attorney could sign documents in the sale of the property, that authority is not conveyed by a trust deed. '
	},
	
	{
		'Q' : 'In a contract for deed, the borrower holds:',
		'A1' : 'equitable title',
		'A2' : 'legal title',
		'A3' : 'no title',
		'A4' : 'full title',
		'Correct' : 'A1',
		'Response' : 'Legal title is held by the lender, giving it the right to repossession (forfeiture), until the loan is paid in full.  During the term of the loan, the borrower holds equitable title which gives them the right to title at some time in the future, when the last payment is made.'
	},
	
	{
		'Q' : 'If the seller will not agree to an option, it might be a good time to use a(n):',
		'A1' : 'First right of refusal',
		'A2' : 'Lease/option',
		'A3' : 'Exclusive right-to-sell',
		'A4' : 'Net sale agreement',
		'Correct' : 'A1',
		'Response' : 'A first right of refusal is similar to an option.  The seller can still seek a buyer, but if the seller receives a genuine offer, the holder of the first right of refusal must be allowed to meet terms of the offer.  If the holder refuses to do so, then the seller can go ahead and accept the offer.  The property is not taken off the market, as it is in an option.  An exclusive right-to-sell is a listing.'
	},
	
	{
		'Q' : 'The advantages given to the optionee through an option are obvious.  Which of the following would be an advantage to the optionor?',
		'A1' : 'Non-refundable consideration',
		'A2' : 'Taking the property off the market',
		'A3' : 'Having the right to sell or not to sell during the option period',
		'A4' : 'Receiving rent during the term of the lease/option',
		'Correct' : 'A1',
		'Response' : 'The non-refundable consideration is money that the optionee pays to the optionor to obtain the right to buy or not buy the property.  This is to compensate for opportunities lost.  Whether or not the optionee exercises the option and buys the property, the optionor keeps this payment.  Taking the property off the market is an obligation, not an advantage.  Of course an option has nothing to do with rent, and the choice to buy is with the optionee, not the optionor.'
	},
	
	{
		'Q' : 'Which of the following is a feature of a corporation?',
		'A1' : 'Personal assets are protected from lawsuits brought against the corporation.',
		'A2' : 'All partners are limited partners.',
		'A3' : 'Each member has full liability.',
		'A4' : 'Each owner has full right to make binding decisions on the corporation.',
		'Correct' : 'A1',
		'Response' : 'The answer is that personal assets may be protected, with the emphasis being on "may."  It certainly isn\'t a partnership of any kind.  The corporation is considered a legal person and the legal liability resides with the corporation.'
	},
	
	{
		'Q' : 'When Jedediah deeded his property to Geraldine, his daughter, he put a stipulation in the deed that if she ever added the name of her husband to the deed, the property would revert to Jedediah.  This made the transfer of ownership:',
		'A1' : 'fee simple defeasible.',
		'A2' : 'a life estate.',
		'A3' : 'fee simple absolute with exceptions.',
		'A4' : 'illegal.',
		'Correct' : 'A1',
		'Response' : 'The legal term for this transaction is fee simple defeasible.  The root word of defeasible is defeat.  When there is a condition the grantee must meet to retain title, it is said to be a defeasible fee, or fee simple defeasible.  Sometimes it is also referred to as a qualified fee estate.  Think of "defeasible" or "qualified" as indicating that strings are attached to the ownership.'
	},
	
	{
		'Q' : 'Betty conveys a life estate to her son-in-law Bill, but bases it on the life of her daughter Janet.  Bill now holds a:',
		'A1' : 'ife estate pur autre vie.',
		'A2' : 'estate in remainder.',
		'A3' : 'estate in reversion.',
		'A4' : 'life estate.',
		'Correct' : 'A1',
		'Response' : 'A life estate pur autre vie is when one person is the holder, but the duration of the life estate interest is based on the life of someone other than the holder, as is the case in this question.  The remainderman would be the next person in line to receive the life estate when Janet dies; and Betty, the grantor, holds the right of reversion.  It is not accurate to say Bill has a life estate, as leaving off the "pur autre vie" would indicate the estate lasts for the duration of Bill\'s life . . . an inaccurate indication.'
	},
	
	{
		'Q' : 'When the state is able to take ownership of property because its original owner died and did not leave a will or have heirs, it is called:',
		'A1' : 'Escheat',
		'A2' : 'Eminent domain',
		'A3' : 'Inverse condemnation',
		'A4' : 'Condemnation',
		'Correct' : 'A1',
		'Response' : 'his is the exact circumstance that allows property to escheat to the state.  Each of the other answers have to do with eminent domain.'
	},
	
	{
		'Q' : 'The Johnson\'s built a new fence.  It was later discovered that the fence was 3 feet onto their neighbors property.  This is an example of a(n):',
		'A1' : 'Encroachment',
		'A2' : 'Encumbrance in gross',
		'A3' : 'Easement appurtenant',
		'A4' : 'Ingress',
		'Correct' : 'A1',
		'Response' : 'The Johnson\'s have encroached on their neighbor\'s property.  They have no easement of any kind.  Ingress is simply a way to enter a property just as egress is the way to exit the property.  Though the encroachment creates an encumbrance, there is no such thing as an encumbrance in gross.'
	},
	
	{
		'Q' : 'Mr. Redd had a right of way across the property of Mr. Bleu.  Subsequently, Mr. Redd bought Mr. Bleu\'s property.  What happened to the right of way easement?',
		'A1' : 'It was terminated by merger',
		'A2' : 'It became an easement appurtenant',
		'A3' : 'It became an easement in gross',
		'A4' : 'It became a prescriptive easement',
		'Correct' : 'A1',
		'Response' : 'The fact is that one cannot have an easement on property that they own.  When Redd bought Bleu\'s property the easement was terminated by merger.  If Redd were later to sell the Bleu property a new easement might have to be created.'
	},
	
	{
		'Q' : 'When CC&R requirements differ from building code requirements, which one takes precedence?',
		'A1' : 'the one that is most restrictive',
		'A2' : 'the one that was established first',
		'A3' : 'zoning requirement always prevail',
		'A4' : 'CC&R\'s always prevail',
		'Correct' : 'A1',
		'Response' : 'The one that is most restrictive prevails regardless of whether it was set by zoning standards or private requirements.'
	},
	
	{
		'Q' : 'When building a retaining wall, which of the following is the owner of the land providing?',
		'A1' : 'Lateral Support',
		'A2' : 'Reliction',
		'A3' : 'Accession',
		'A4' : 'Severance',
		'Correct' : 'A1',
		'Response' : 'Lateral support give support to higher property, as is accomplished with a retaining wall.  It is considered to be real property.  Severance is severing something which was real property and turning it into personal property.  Accession is the opposite, or adding to the real property.  Reliction is not pertinent here.'
	},
	
	{
		'Q' : '"No two parcels of real property are exactly the same," is the definition of:',
		'A1' : 'non-homogeneous',
		'A2' : 'a fixture',
		'A3' : 'an emblement',
		'A4' : 'lateral support',
		'Correct' : 'A1',
		'Response' : 'One of the unique features of real estate is that every parcel is considered to be one-of-a-kind.  This characteristic is labeled non-homogeneous.  A fixture is attached to the real property without losing its identity.  Emblements are crops nurtured in the year of the sale.  Lateral support is used to retain higher ground.'
	},
	
	{
		'Q' : 'The definition of the term "real property" includes:',
		'A1' : 'Air space and subsurface rights',
		'A2' : 'Items of personal property included in the Real Estate Purchase Contract',
		'A3' : 'Emblements',
		'A4' : 'Chattels',
		'Correct' : 'A1',
		'Response' : 'Chattel is a synonym for personal property, emblements are crops that were nurtured by the seller in the year of the transfer and are classified legally as personal property.  Air space and subsurface rights, including mineral and water rights, are considered real property.'
	},
	
	{
		'Q' : 'Which of the following would not be part of an operating budget?',
		'A1' : 'Property management trust account',
		'A2' : 'Operating expenses',
		'A3' : 'Rental income',
		'A4' : 'Other income',
		'Correct' : 'A1',
		'Response' : 'The budget should be planned around expected income and expenditures.  The trust account is a repository for other people\'s money.  It is where the rental and other income from the property being managed would be deposited.'
	},
	
	{
		'Q' : 'The lawsuit one would file to evict a tenant is called:',
		'A1' : 'Unlawful detainer',
		'A2' : 'Restitution action',
		'A3' : 'Partition action',
		'A4' : 'Eviction order',
		'Correct' : 'A1',
		'Response' : 'The lessee would be given a notice to quit, or notice to pay or quit.  If they failed to respond, an unlawful detainer action would be filed with the court.  If the lessor wins, a writ of restitution (sometimes called the eviction order) would be issued to restore the premises to the landlord.  A partition action applies to concurrent owners when one of them wants their money out of the property.'
	},
	
	{
		'Q' : 'Property A is appraised at $68,000.  The assessed rate is 34% and the tax rate is $8.76 per $100.  How much tax is due?',
		'A1' : '$2,025.31',
		'A2' : '$5,956.80',
		'A3' : '$231.20',
		'A4' : '$2,639.27',
		'Correct' : 'A1',
		'Response' : 'The computation is:  $68,000 X 34% = $23,120 ˜ 100 = $231.20 X $8.76 = $2,025.31  The formula is: Appraised value X Assessed rate ˜ 100 (to determine the number of units of 100) X Tax rate = Tax Due'
	},
	
	{
		'Q' : 'The Wilson\'s property is very similar in size and style and age to their neighbors down the block.  They just received their property tax bill and were talking to the neighbors and comparing.  It seems the neighbor\'s tax bill is several hundred dollars lower than the Wilson\'s.  Where would they go to appeal?',
		'A1' : 'The board of equalization',
		'A2' : 'The tax assessor\'s office',
		'A3' : 'The board of adjustment',
		'A4' : 'The state tax commissioner',
		'Correct' : 'A1',
		'Response' : 'Don\'t confuse the right answer with the Board of Adjustment.  The Board of Adjustment is where one would apply for a variance to do something in conflict with zoning laws.  The Wilsons want to equalize their tax bill with their neighbor\'s.  The tax assessor\'s office sets the value on the property, but doesn\'t handle the appeals.'
	},
	
	{
		'Q' : 'Which of the following best describes the process of settlement?',
		'A1' : 'Signing of all necessary documents',
		'A2' : 'Recording of all necessary documents.',
		'A3' : 'The loan is funded.',
		'A4' : 'The sellers have received all funds coming to them.',
		'Correct' : 'A1',
		'Response' : 'Settlement is when all necessary documents are signed by  buyer and seller and any monies due from each is paid.  The actual closing occurs when the loan is funded and the necessary documents recorded.  The seller usually won\'t receive funds until after the closing.'
	},
	
	{
		'Q' : 'A buyer and seller can agree to any arrangement mutually acceptable for handling the fee of the closing entity.  However, in most cases, how would it appear on the settlement statement?',
		'A1' : 'A debit to the buyer and a debit to the seller.',
		'A2' : 'A credit to each of them.',
		'A3' : 'A credit to the buyer and a debit to the seller.',
		'A4' : 'A debit to the buyer and a credit to the seller.',
		'Correct' : 'A1',
		'Response' : 'Most often they agree to split it equally.  Therefore, if it is an obligation for payment to both, it will be a debit to both.'
	},
	
	{
		'Q' : 'Gain is recognized as income:',
		'A1' : 'in the year it is realized.',
		'A2' : 'the year after it is realized.',
		'A3' : 'the year after it is realized, except in the case of investment property.',
		'A4' : 'in the year it is realized, except in the case of commercial property.',
		'Correct' : 'A1',
		'Response' : 'Even if you collected the last month\'s rent three years ahead of time, you must count it as income in the year you actually received it.'
	},
	
	{
		'Q' : 'For the ordinary taxpayer, which of the following would be most beneficial to him/her when computing taxes?',
		'A1' : 'Tax credits',
		'A2' : 'Capital gains',
		'A3' : 'Deductions',
		'A4' : 'Depreciation',
		'Correct' : 'A1',
		'Response' : 'A tax credit is subtracted from the actual tax due.  For instance, if a person was in the 28% tax bracket and took a deduction of $1,000, it would result in a $280 savings on their tax bill.  However, if they were given a $1,000 tax credit, it would be a $1,000 saving.'
	},
	
	{
		'Q' : 'A  lender, in order to make sure of the condition of title on a property being used for collateral, will most often require a(n):',
		'A1' : 'ALTA policy of title insurance',
		'A2' : 'Standard policy of title insurance',
		'A3' : 'Plain language policy',
		'A4' : 'Abstract of title',
		'Correct' : 'A1',
		'Response' : 'Lenders require an ALTA policy which covers factors not included in the standard policy.  The standard policy is the one usually used for the buyer, though a plain language policy would be better, as it insures against mechanic\'s liens in addition to recorded items.  An abstract is merely a history of the title, with no guarantees.'
	}
);

//General 6
questions[5] = new Array(

	{
		'Q' : 'When the agent is hired to use his/her expertise to fulfill the objectives of the principal the agent is a:',
		'A1' : 'general agent.',
		'A2' : 'specific agent.',
		'A3' : 'undisclosed agent.',
		'A4' : 'universal agent.',
		'Correct' : 'A1',
		'Response' : 'The wording in this question is a perfect definition of a general agent.  Specific agency has a narrowly defined scope.  Undisclosed agent is someone in an agency relationship who does not let the customer know they are representing someone.  Universal agency is very broad, representing the principal in ALL matters.'
	},
	
	{
		'Q' : 'Mr. Zephyr employed a broker to make an offer to purchase Mr. Aboobee\'s home.  Mr. Zephyr instructed the broker to keep his (Mr. Zephyr\'s) identity concealed.  When the broker filled in the buyer\'s name on the purchase agreement, he wrote, "Zealous Realty acting for and in behalf of an undisclosed principal."  This would make Mr. Zephyr what kind of a principal in this transaction?',
		'A1' : 'Partially disclosed',
		'A2' : 'Fully disclosed',
		'A3' : 'Partially undisclosed',
		'A4' : 'Undisclosed',
		'Correct' : 'A1',
		'Response' : 'Since the real estate company clearly revealed their role as agent, but withheld the identity of the buyer, the buyer is considered a partially disclosed principal.  The customer knows there is a principal, but not the identity.  To be fully disclosed, the seller (customer) would have to be aware there was a principal and the principal\'s identity.  Undisclosed usually involves some degree of subterfuge wherein the agent is acting as though he/she is the buyer (principal).  It would not be a good idea to be involved in undisclosed agency.'
	},
	
	{
		'Q' : 'When sales agent Sam took a listing, the contract named Sam to be the subagent for that listing.  All other sales agents who worked for Sam\'s broker would have to represent the buyer if they brought someone to the home.  This is an example of:',
		'A1' : 'Designated agency',
		'A2' : 'Agency by ratification',
		'A3' : 'Exclusive right to sell',
		'A4' : 'Limited agency',
		'Correct' : 'A1',
		'Response' : 'This is an example of designated agency, whereby the agency is exclusively assigned to the broker and one assigned, or designated licensee to act as subagent.  All other licensees in the company would represent the buyer.  Agency by ratification is the way an agency relationship created through implication is affirmed.  Exclusive right to sell is a type of listing and has nothing directly to do with who is or isn\'t a subagent.  Limited agency involves representation of both the buyer and seller.'
	},
	
	{
		'Q' : 'The first step of preparing an appraisal is to:',
		'A1' : 'determine the purpose, or define the problem.',
		'A2' : 'determine highest and best use.',
		'A3' : 'gather the data.',
		'A4' : 'apply as many of the three approaches as possible.',
		'Correct' : 'A1',
		'Response' : 'The key word in this question is "step."  The first step is to know what the purpose of the appraisal is.  If the question had read, "...the first principle an appraiser would apply is..." then the answer would be "highest and best use."'
	},
	
	{
		'Q' : 'When appraising a vacant lot, the first principle an appraiser should consider is:	',
		'A1' : 'highest and best use',
		'A2' : 'substitution',
		'A3' : 'conformity',
		'A4' : 'define the purpose',
		'Correct' : 'A1',
		'Response' : 'Though the first step the appraiser takes is to determine the purpose of the appraisal, the first principle applied is to determine highest and best use of the property.  The appraiser will consider the impact of substitution (comparables) and conformity after determining highest and best use.'
	},
	
	{
		'Q' : 'The formula for computing the gross rent multiplier is:',
		'A1' : 'selling price ˜ gross rents',
		'A2' : 'net operating income ˜ gross income',
		'A3' : 'gross rents ˜ purchase price',
		'A4' : 'gross income - expenses	',
		'Correct' : 'A1',
		'Response' : 'This is a matter of fact. You should memorize this formula.  The gross rent multiplier (GRM) is not an appraisal approach.  However, it uses the two numbers, selling price and gross rent, that most accurately reflect value.  Therefore, it is considered a relatively reliable, quick and dirty look at value.'
	},
	
	{
		'Q' : 'A building was completed 16 years ago.  At that time, it was estimated the building would remain useable for 90 years.  Recently, an evaluation of the property showed it had been so well cared for that it was as good as buildings three years newer.  Which of the following would be most accurate concerning its age?',
		'A1' : 'Physical age = 16; economic age = 74; effective age = 13',
		'A2' : 'Physical age = 74; economic age = 16; effective age = 13',
		'A3' : 'Physical age = 16; economic age = 74; effective age = 19',
		'A4' : 'Physical age = 13; economic age = 71; effective age = 16',
		'Correct' : 'A1',
		'Response' : 'Physical age is how long since the building was completed (16 years).  Economic age is how many years it is estimated the building will continue to function (74 years).  Effective age is the age the appraiser uses which is based on the care the building has been given, in this case good care (13 years).'
	},
	
	{
		'Q' : 'When doing an appraisal, the appraiser, unless specifically instructed otherwise, will consider the financial part of the transaction to be:',
		'A1' : 'cash or cash equivalent.',
		'A2' : 'a loan with a reasonable down payment.',
		'A3' : 'a high down payment of at least 20%.',
		'A4' : 'the appraiser is not concerned with the financing one way or the other.',
		'Correct' : 'A1',
		'Response' : 'Appraisers almost always approach an appraisal as though a purchase of the property would be done on the basis of a cash or cash equivalent deal.  Thus, they don\'t bother themselves with the possibility that the value could possibly go up if the seller were willing to carry a contract for all or part of the purchase price, and other alternative financing methods.'
	},
	
	{
		'Q' : 'A contract wherein each of the parties promise to do something would be a(n):',
		'A1' : 'bilateral contract.',
		'A2' : 'unilateral contract.',
		'A3' : 'unenforceable contract.',
		'A4' : 'voidable contract.',
		'Correct' : 'A1',
		'Response' : 'A promise for a promise is the definition of a bilateral contract.  A promise for a performance would be a unilateral contract.  This is an obvious example of a bilateral contract.'
	},
	
	{
		'Q' : 'Mrs. Benackerly leased a property from Mrs. Castenelly for three years.  During the middle of the third year, Mrs. Benackerly entered into a contract with Mr.Dippydo wherein they agreed he would take her place in the lease, move into the property and pay rent for the remaining period of the lease.  Though they informed Mrs. Castenelly, they didn\'t bother to get her approval.  This would be an example of:',
		'A1' : 'a simple, legal assignment of contract.',
		'A2' : 'an illegal transaction between Mrs. Benackerly  and Mr. Dippydo.',
		'A3' : 'a complex process of contract law known as a novation of contract.',
		'A4' : 'a contract by pur autre vie.',
		'Correct' : 'A1',
		'Response' : 'Mrs. Benackerly assigned Mr. Dippydo into her place.  Keep in mind that all contracts are assignable without the approval of the other party except personal service contracts and contracts that specifically prohibit assignment.  However, Mrs. Benackerly retains secondary, or underlying, liability.  If Benackerly had wanted to be relieved from the liability, she would need Castenelly agree to the assignment, thereby creating a novation.'
	},
	
	{
		'Q' : 'What is the term meaning:  to sign a contract, and what are the signers called?',
		'A1' : 'Execute - signatories',
		'A2' : 'Mediate - mediators',
		'A3' : 'Execute - executors',
		'A4' : 'Recording - signatories',
		'Correct' : 'A1',
		'Response' : '"To execute" has two meanings.  One is to sign, and the other is to fulfill the terms of the contract.  In this case, execute means to sign.  Those who sign are called signatories.  Executors are either people who carry out the terms of a will or else they are those who work on "the green mile" at prisons.  Recording occurs at the county recorders office.  Mediate is a process of resolving contract disputes, and mediators are those who preside at the mediation.'
	},
	
	{
		'Q' : 'When does title actually pass under a deed?',
		'A1' : 'At the time it is delivered and accepted.',
		'A2' : 'On the day of the date written on the deed.',
		'A3' : 'On the day the deed is executed or signed.',
		'A4' : 'On the day it is acknowledged.',
		'Correct' : 'A1',
		'Response' : 'Delivery is the key to the conveyance of rights stated in a deed.  If there is no delivery, there is not a valid transfer of ownership.  Regardless of dates on the deed, who signed it, or whether it was notarized (acknowledged) or not, without delivery there is no conveyance from grantor to grantee.'
	},
	
	{
		'Q' : 'Which of the following is NOT necessary to make a deed valid?',
		'A1' : 'Date of the transfer of ownership',
		'A2' : 'Property description',
		'A3' : 'Signature of the grantor',
		'A4' : 'Delivery of the deed to the grantee',
		'Correct' : 'A1',
		'Response' : 'There are four things which are NOT necessary to make a deed valid:  1) a date, 2) recording, 3) acknowledgement (being notarized), and 4) signature of the grantee.  It is "wise, but not necessary" to have the first three.  However, not only is the signature of the grantee not necessary, there is no place on a deed provided for the grantee\'s signature.'
	},
	
	{
		'Q' : 'A special warranty deed:',
		'A1' : 'gives the covenant of seizin and covenant against encumbrances for the period of time the grantor owned the property.',
		'A2' : 'would be the best deed the grantee could receive.',
		'A3' : 'gives all five warranties and covers the period of the transfer of ownership back to the patent deed.',
		'A4' : 'is special to the grantor because it gives no warranties and no guarantees.',
		'Correct' : 'A1',
		'Response' : 'A special warranty deed gives two warranties:  1) seizin, and 2) against encumbrances, for the period of time the grantor owned the property.  A general warranty deed gives all five warranties and a quit claim deed gives no warranties or guarantees.'
	},
	
	{
		'Q' : 'Under Truth in Lending, the right of rescission would apply in which of the following situations:',
		'A1' : 'The borrower decided the interest was too high and wanted to cancel the loan.',
		'A2' : 'The buyer has decided it\'s too much money to spend to purchase the car.',
		'A3' : 'The consumer decided to wait a few months to make the purchase.',
		'A4' : 'The buyer changed his mind for no reason at all.',
		'Correct' : 'A1',
		'Response' : 'Truth in Lending, or Reg Z, provides for a three day right of rescission when closing on most consumer loans.  First mortgages are an exception and have no right of rescission.   Second mortgages or refinancing are not exceptions. '
	},
	
	{
		'Q' : 'The EPA is responsible for policing which of the following?',
		'A1' : 'Disclosure of lead-based paint hazards, presence of radon, etc.',
		'A2' : 'Discrimination in advertising',
		'A3' : 'Price fixing',
		'A4' : 'Illegal practices in the purchase and sale of personal property',
		'Correct' : 'A1',
		'Response' : 'The Environmental Protection Agency (EPA) is charged with the task of protecting the public from hazardous environmental conditions.  These involve the existence of lead-based paint in buildings constructed before 1978, dangerous levels of radon buildings, and many other factors that endanger the environment in which we live.  The Sherman Antitrust Act outlaws price fixing, Truth in Lending handles disclosure of borrowing costs, and the Uniform Commercial Code regulates the sale of personal property.'
	},
	
	{
		'Q' : 'Like the Do Not Call requirements, there are "do not" requirements in relation to FAX\'s and emails.  What is a key requirement for those two types of unsolicited advertising?',
		'A1' : 'Provide opt out procedures',
		'A2' : 'Keep a company Do Not Fax list',
		'A3' : 'Emails can only be sent to those with whom you have a business relationship',
		'A4' : 'Scrub the company list against the federal list monthly',
		'Correct' : 'A1',
		'Response' : 'It is not necessary to have a pre-existing business relationship to send advertising FAX\'s or emails.  There is no requirement for a list to be kept, and the "scrubbing" concept applies to the Do Not Call list only.  However, with both FAX\'s and emails, an opt out provision and procedures must be given.'
	},
	
	{
		'Q' : 'What is the main purpose for CERCLA?',
		'A1' : 'Provide for cleaning up hazardous waste sites',
		'A2' : 'Sending polluters to jail',
		'A3' : 'Preventing the spread of toxic waste',
		'A4' : 'Assigning first responsibility to the new buyer',
		'Correct' : 'A1',
		'Response' : 'CERCLA seeks to assign liability for hazardous wastes, provide a trust fund for cleanup when those responsible can\'t be identified, find the responsible parties and hold them responsible, if possible.  It is possible that the new buyer ends up being held responsible for the costs of the cleanup, but they are definitely not the first in line.'
	},
	
	{
		'Q' : 'D secured a loan using the four-plex she was buying and a second mortgage on her home as collateral.  This would loan would be an example of which of the following?',
		'A1' : 'Blanket mortgage',
		'A2' : 'Package mortgage',
		'A3' : 'Wraparound mortgage',
		'A4' : 'Chattel mortgage',
		'Correct' : 'A1',
		'Response' : 'When a single loan is secured with two or more parcels of real property, i.e., a construction loan on a subdivision, it is called a blanket mortgage.  A package mortgage used both real and personal property as security.  A wraparound is a loan that encompasses a preexisting loan, and a chattel mortgage uses personal property as collateral (as in a car loan).'
	},
	
	{
		'Q' : 'If a lender was considering giving a loan for a commercial project, and felt that its possibility for making a profit was so good it wanted some ownership in the project, it would offer the prospective borrower a(n):',
		'A1' : 'Participation mortgage',
		'A2' : 'Package mortgage',
		'A3' : 'Purchase money mortgage',
		'A4' : 'FHA loan',
		'Correct' : 'A1',
		'Response' : 'A participation loan allows the lender to have either a profit interest or an ownership interest in the project being financed by the loan, in addition to collecting interest.  In a purchase money mortgage the seller is the lender.  A package mortgage uses both real and personal property as collateral.'
	},
	
	{
		'Q' : 'If the purchase price was $75,000 and the loan was $48,000, what would the LTVR be?',
		'A1' : '64% LTVR',
		'A2' : '156%  LTVR',
		'A3' : '75% LTVR',
		'A4' : '48% LTVR',
		'Correct' : 'A1',
		'Response' : 'Need to do a little arithmetic here.  The formula is:  Loan(s) ˜ Value = LTVR.  So, $48,000 ˜ $75,000 = 64%.  Remember, when doing an LTVR problem the L for loan always means all loans added together.'
	},
	
	{
		'Q' : 'The largest area of land used in Rectangular Survey is:',
		'A1' : 'Township',
		'A2' : 'Acre',
		'A3' : 'Section',
		'A4' : 'Base and Meridian',
		'Correct' : 'A1',
		'Response' : 'An acre is about 208 feet by 208 feet or 43,560 square feet.  A section is one mile by one mile.  Base and meridian do not define area at all.  A township is six miles by six miles and, therefore, the answer.'
	},
	
	{
		'Q' : 'Herbert Landon, a surveyor, was standing in Section 14.  Which direction would he go to get to Section 22?',
		'A1' : 'Southwest',
		'A2' : 'Northwest',
		'A3' : 'Northeast',
		'A4' : 'Southeast',
		'Correct' : 'A1',
		'Response' : 'If you draw out the numbers, the first row would be 6 5 4 3 2 1, the next row would be 7 8 9 10 11 12.  The third row would be 18 17 16 15 14 13, and the fourth row would be 19 20 21 22 23 24.  If you line those up, one under the other it becomes obvious that if you were standing on 14 you would have to go southwest to get to 22 which is right below 15. '
	},
	
	{
		'Q' : 'The metes and bounds method of land description is sometimes referred to as:',
		'A1' : 'Monuments and measurements.',
		'A2' : 'Lot, block and tract.',
		'A3' : 'The informal method.',
		'A4' : 'Government survey.',
		'Correct' : 'A1',
		'Response' : 'The monuments (natural or man made) would mark the corners of the property and the boundaries would be measured in between.  Hence, the name monuments and measurements.'
	},
	
	{
		'Q' : 'Norbert enters into a lease which begins October 1 and ends March 1 of the next year.  This lease would be considered:',
		'A1' : 'Tenancy for Years',
		'A2' : 'Tenancy at Will',
		'A3' : 'Tenancy at Sufferance',
		'A4' : 'Periodic Tenancy',
		'Correct' : 'A1',
		'Response' : 'When a lease has a definite termination date, meaning it has no possibility of automatic renewal, it is tenancy for years, sometimes referred to as an estate for years.  The termination date could be renegotiated, but not automatic.  Tenancy at will can be terminated at the will of the lessor or the lessee.  A tenant at sufferance is still in the property after the expiration of the lease.  Periodic tenancy is month-to-month and automatically renews when rent is paid and accepted.'
	},
	
	{
		'Q' : 'An escalator clause provides that the:',
		'A1' : 'rent will automatically increase on a predetermined date or dates.',
		'A2' : 'amount of square footage will be increased on an agreed to future date.',
		'A3' : 'amount of rent will increase if certain defaults take place.',
		'A4' : 'term of the loan will be extended under prescribed conditions.',
		'Correct' : 'A1',
		'Response' : 'Though the other choices use interesting applications of the word escalate, an escalation clause in a lease specifically means that the rent is going to increase on the date or dates indicated and in the stated amount.'
	},
	
	{
		'Q' : 'A lease where the amount of rent to be paid is decided in advance and will not change during the term of the lease is best known as a(n):',
		'A1' : 'Flat lease',
		'A2' : 'Proprietary lease',
		'A3' : 'Reappraisal lease',
		'A4' : 'Index lease',
		'Correct' : 'A1',
		'Response' : 'The amount to be paid is flat, or steady for the whole term.  A proprietary lease is not technically a lease.  It goes with ownership of stock in a stock-cooperative.  With reappraisal and index leases, the lease payments will change over time either based on a reappraisal or the fluctuations of a chosen economic indicator (index).'
	},
	
	{
		'Q' : 'The main difference between an exclusive right-to-sell listing and an exclusive agency listing is that with an exclusive agency listing:',
		'A1' : 'The seller can find a buyer himself and sell the home without paying a commission.',
		'A2' : 'The listing broker cannot enter into a co-brokering agreement with another broker.',
		'A3' : 'The listing broker cannot allow any of his sales persons to work on the listing.',
		'A4' : 'It is exactly the same as an exclusive right-to-sell; they are just two names for the same kind of listing.',
		'Correct' : 'A1',
		'Response' : 'In an exclusive agency listing the seller retains the right to find a buyer and not have to pay the broker a commission.  This type of listing is sometimes used on commercial property, but usually not on residential.  If the broker publishes the listing across the MLS, that is entering into a co-broker agreement with fellow members.'
	},
	
	{
		'Q' : 'The legal doctrine of "to and through" as applied to the process of selling a property states:',
		'A1' : 'The agent that shows the property to the eventual buyer first earns the selling portion of the commission.',
		'A2' : 'The agent that initiates an unbroken chain of events that leads to the closing earns the selling portion of the commission',
		'A3' : 'The agent who represents both the seller and the buyer has a right to selling portion of the commission.',
		'A4' : 'The agent who sues in court and wins has achieved the procuring cause.',
		'Correct' : 'A1',
		'Response' : 'The concept of "to and through" is designed to protect real estate agents from other real estate agents who might pilfer their clients.  It states that the selling portion of the commission should be paid to the first agent to show the property to the eventual buyer.  The procuring cause philosophy said the agent who creates an unbroken chain of events that leads to closing is the one who earned the commission.'
	},
	
	{
		'Q' : 'An investor goes to a sheriff\'s sale, bids and wins the bid.  That day when paying for the property, he/she will receive which of the following as evidence of the purchase?',
		'A1' : 'Certificate of Sale',
		'A2' : 'Trustee\'s Deed',
		'A3' : 'Sheriff\'s Deed',
		'A4' : 'General Warranty Deed',
		'Correct' : 'A1',
		'Response' : 'He/she will receive a certificate of sale, which simply verifies that he/she won the bid and paid for the property.  However, possession and the sheriff\'s deed will not be given until the statutory period of redemption passes.  During this period, the original owner has the right to pay the all debts against the property in full, and retain the property.  The new buyer would then receive his/her money back with interest.'
	},
	
	{
		'Q' : 'Under a trust deed and note, what interest do the borrower and lender hold in the property which is used as collateral?',
		'A1' : 'borrower - legal title, lender - a lien',
		'A2' : 'borrower - equitable title, lender - legal',
		'A3' : 'title	borrower - legal title, lender - equitable title',
		'A4' : 'borrower - lien, lender - legal title',
		'Correct' : 'A1',
		'Response' : 'The borrower holds legal title and the lender has a lien.  The lender has no ownership interest in the property in any way, shape, or form.  Because of that, even in foreclosure, the only way the lender can get the property is to buy it like anyone else would.  That is the magic of lien theory.'
	},
	
	{
		'Q' : 'In an option, the optionee is:',
		'A1' : 'Buyer',
		'A2' : 'Seller',
		'A3' : 'Agent arranging the option',
		'A4' : 'Broker of the agent',
		'Correct' : 'A1',
		'Response' : 'The optionor is the seller, who is giving the option to the buyer.  Thus the buyer is the optionee.'
	},
	
	{
		'Q' : 'Which of the following is NOT part of the Bundle of Rights?',
		'A1' : 'Interest',
		'A2' : 'Use',
		'A3' : 'Disposition',
		'A4' : 'Possession',
		'Correct' : 'A1',
		'Response' : 'Interest fits with the four unities of joint tenancy.  You know, PITT (possession, interest, time, and title).  The bundle of rights has four sub-bundles, possession, use or control, quiet enjoyment (the missing one), and disposition.'
	},
	
	{
		'Q' : 'Kyle and Bob own property as joint tenants.  Bob dies.  Kyle has Bob\'s name removed from the ownership.  Kyle now:',
		'A1' : 'Owns the property as a tenant in severalty.',
		'A2' : 'Owns the property as a tenant in common with Bob\'s heirs.',
		'A3' : 'Has no ownership since his interest was dependent on the life of Bob.',
		'A4' : 'Bob\'s interest in the property will be part of his estate and must go through probate before anyone can own it.',
		'Correct' : 'A1',
		'Response' : 'Once joint tenancy is established, the right of survivorship is in effect.  Therefore this is a simple matter of the ownership passing immediately to Kyle, and only Kyle, which makes his ownership severalty.'
	},
	
	{
		'Q' : 'Zack, Hack and Mack own property as joint tenants.  Hack wants to sell his interest, but is unable to do so.  Zack and Mack refuse to purchase it from him.  In frustration, Hack could institute which of the following suits?',
		'A1' : 'Partition Action',
		'A2' : 'Unlawful Detainer Action',
		'A3' : 'Quiet Title Action',
		'A4' : 'Condemnation Action',
		'Correct' : 'A1',
		'Response' : 'Unlawful detainer actions are to evict a tenant; quiet title actions clear clouds from title and are used in adverse possession; and a condemnation action can lead to the exercise of eminent domain.  In this case, a partition action is the proper way to go.  If Hack wins, the court will likely order the sale of the property, since money is easy to divide.  If practical, the court might order a physical division of the property into three separate parts.'
	},
	
	{
		'Q' : 'Betty conveys a life estate to her son-in-law Bill, but bases it on the life of her daughter Janet.  Upon Janet\'s death, the life estate goes to Betty\'s son Martin, and is to be conveyed to Martin fee simple.  Which of the following has been eliminated?',
		'A1' : 'Estate in reversion',
		'A2' : 'Life estate pur autre vie',
		'A3' : 'Estate in remainder',
		'A4' : 'Habendum life estate',
		'Correct' : 'A1',
		'Response' : 'Since Martin will receive the life estate and become the fee simple owner of the property, the estate will never return to the grantor (Betty), thus eliminating the right of reversion.'
	},
	
	{
		'Q' : 'Which of the following requires compensation by the government?',
		'A1' : 'Eminent Domain',
		'A2' : 'Escheat',
		'A3' : 'Police Power',
		'A4' : 'Zoning',
		'Correct' : 'A1',
		'Response' : 'Property cannot be taken from a private individual by the government without due process of law and just compensation.  The right is eminent domain, and the process is condemnation.  Police power cannot "take" private property, and, therefore, no compensation is necessary.  Zoning regulates land use, but does not "take" property.'
	},
	
	{
		'Q' : 'The CC&R\'s in a subdivision require that the exterior of all homes be brick.  When Mr. Kendall was building his home, it became apparent he was going to use aluminum siding.  If the others who own homes in that subdivision wanted to stop him, they first would go to the courts and obtain a(n):',
		'A1' : 'Injunction',
		'A2' : 'Encumbrance',
		'A3' : 'Cease and Desist Order',
		'A4' : 'There is nothing they can do.',
		'Correct' : 'A1',
		'Response' : 'Though what they ultimately want is a "cease and desist order", their first task is to get him to stop building.  That would be accomplished with an injunction.'
	},
	
	{
		'Q' : 'In a blighted area that was highly populated with run down apartment buildings, the city bought some of the properties and had to exercise their power of eminent domain on others, so the area could be improved and made more attractive and livable.  This process is called:',
		'A1' : 'Urban renewal',
		'A2' : 'Cease and desist',
		'A3' : 'Injunctive action',
		'A4' : 'Unlawful detainer',
		'Correct' : 'A1',
		'Response' : 'The process of getting rid of blighted areas in a city is called urban renewal. '
	},
	
	{
		'Q' : 'A wall, be it a fence or a wall that is shared by two homes, i.e., a twin home, is referred to as a:',
		'A1' : 'party wall',
		'A2' : 'lateral support	',
		'A3' : 'bilateral wall',
		'A4' : 'shared wall',
		'Correct' : 'A1',
		'Response' : 'That it is called a party wall is simply a matter of fact.'
	},
	
	{
		'Q' : '"Attached to the land or the deed," defines:',
		'A1' : 'Appurtenant',
		'A2' : 'Accession',
		'A3' : 'Alienation',
		'A4' : 'Acceleration',
		'Correct' : 'A1',
		'Response' : 'That which is appurtenant is attached to the land, as with a house or fence; or attached to the deed, as with an easement.  Accession is adding to the real property, like planting a tree.  Alienation is conveying ownership to another, and acceleration is a loan term for calling the loan due and payable.'
	},
	
	{
		'Q' : 'Which of the following is TRUE?',
		'A1' : 'A deed transfers ownership to real property only.',
		'A2' : 'A bill of sale transfers ownership to real property only.',
		'A3' : 'A bill of sale can transfer ownership to real property and/or personal property.',
		'A4' : 'None of the Above',
		'Correct' : 'A1',
		'Response' : 'A deed typically transfers ownership to real property, but can transfer ownership to personal property if provided for in the Real Estate Purchase Agreement.	A bill of sale is used exclusively for personal property and a deed transfers only real property.  If a sale of a home included some of the furniture, both a deed and one or more bills of sale would be required.'
	},
	
	{
		'Q' : 'Real property includes all of the following EXCEPT:',
		'A1' : 'Trade fixtures',
		'A2' : 'Buildings affixed to the land',
		'A3' : 'Water courses appurtenant to the land',
		'A4' : 'Minerals, oil and gas',
		'Correct' : 'A1',
		'Response' : 'Trade fixtures are always classified as personal property.  They are attached to the business, and the business is personal property.'
	},
	
	{
		'Q' : 'A management contract would NOT include which of the following?',
		'A1' : 'Vacancy/lost rent percentage',
		'A2' : 'How the property manager is paid',
		'A3' : 'Reporting policy',
		'A4' : 'Rent collection policy',
		'Correct' : 'A1',
		'Response' : 'The other three items would all be included in the contract between the owner and the manager.  The vacancy and lost rent percentage changes over time and would not be in the management contract.'
	},
	
	{
		'Q' : 'When the type of tenancy is not clearly identified in the lease, the lease will be considered to be:',
		'A1' : 'month-to-month',
		'A2' : 'of no force',
		'A3' : 'fixed term',
		'A4' : 'at will',
		'Correct' : 'A1',
		'Response' : 'The default, if the type is not specified in the agreement is month to month.  This is periodic tenancy, which renews each period when the tenant pays rent and the landlord (or the agent on his/her behalf) accepts it.'
	},
	
	{
		'Q' : 'Property B is appraised at $105,000.  The assessed rate 68%, because it is residential property.  The tax rate is .019468.  How much is owed for property tax?',
		'A1' : '$1,390.02',
		'A2' : '$2,044.14',
		'A3' : '$3,3667.55',
		'A4' : '$5,393.46',
		'Correct' : 'A1',
		'Response' : 'The computation is:  $105,000 X 68% = $71,400 X .019468 = $1,390.02  The formula is: Appraised value X Assessed rate X Tax rate = Tax due'
	},
	
	{
		'Q' : 'The county tax assessor\'s office has set the value on the Anderson property at $450,750.  The tax rate for their taxing district is .01121.  What is their tax liability?',
		'A1' : '$5,052.91',
		'A2' : '$3,568.07',
		'A3' : '$4,507.50',
		'A4' : '$4,267.59',
		'Correct' : 'A1',
		'Response' : 'The tricky thing here is that there is no assessed rate.  If there is none, the property taxes are assessed against the full value of the property.  With an assessed rate, the tax amount is multiplied against a portion of the full value.'
	},
	
	{
		'Q' : 'Regarding debits and credits, which of the following statements is most accurate:',
		'A1' : 'The person paying has a debit, the other one a credit, if applicable.',
		'A2' : 'Debit is what the buyer pays; credit is what the seller pays in prorations.',
		'A3' : 'Debit is like a debt, so the new loan would be a debit for the buyer.',
		'A4' : 'If a seller has a debit the buyer must have a corresponding credit.	',
		'Correct' : 'A1',
		'Response' : 'Think of it this way (cover your ears, accountants):  If I have to pay something, it\'s a debit (debt) from my viewpoint.  If someone else (the lender) is paying it for me, or I previously paid it (the earnest money deposit), I get credit for it.  With proration of property taxes, there would be a debit for one and a corresponding credit for the other person.  On the other hand, the seller\'s payoff of their existing loan will be a huge debit for them.  However, it has nothing to do with the buyer, so there will be no corresponding credit on the buyer\'s side.'
	},
	
	{
		'Q' : 'In a transaction where the HUD 1 Settlement Statement is not required, but the kind of settlement statement with four columns is used (debit/credit for buyers, and debit/credit for sellers), which statement is true?',
		'A1' : 'The buyers debits and credits must balance, and the sellers debits and credits must balance.',
		'A2' : 'The buyers\' two columns and sellers\' two columns must all balance with each other.',
		'A3' : 'The buyers\' and sellers\' credits must balance and the buyers\' and sellers\' debits balance.',
		'A4' : 'Each column could have a different total number at the bottom.',
		'Correct' : 'A1',
		'Response' : 'The buyers debits and credits will balance, and the sellers debits and credits will balance, and in most cases, the buyers\' bottom line will be different from the sellers\' bottom line.'
	},
	
	{
		'Q' : 'Depreciation, as viewed by the IRS is known as:',
		'A1' : 'Cost Recovery',
		'A2' : 'Boot',
		'A3' : 'Appreciation',
		'A4' : 'Adjusted Cost Basis',
		'Correct' : 'A1',
		'Response' : 'Cost recovery is synonymous with depreciation.  Appreciation is when property increases in value. Adjusted cost basis is:  cost plus improvements minus depreciation, and boot equalizes value in an exchange.'
	},
	
	{
		'Q' : 'What is the fewest number of years that can be used to depreciate a strip mall?',
		'A1' : '39',
		'A2' : '27.5',
		'A3' : 'Owner\'s choice',
		'A4' : 'Depends on how long you own it',
		'Correct' : 'A1',
		'Response' : 'Since the strip mall is commercial property, the lowest number of years for depreciation is 39 years.  For residential income property the lowest number is 27.5 years.'
	},
	
	{
		'Q' : 'Which of the following title insurance policies would give the buyer/borrower protection against mechanic\'s liens, along with the standard protection?',
		'A1' : 'Plain language policy',
		'A2' : 'ALTA policy',
		'A3' : 'Standard policy',
		'A4' : 'Chain of title policy',
		'Correct' : 'A1',
		'Response' : 'The ALTA policy is the one purchased by the borrower to cover the lender\'s interests.  A standard policy, provided by the seller for the buyer, only covers recorded items.  A chain of title is not title insurance at all, but a history of the title since the patent.'
	}
);

//Utah 1
questions[6] = new Array(

	{
		'Q' : 'When should the agent who\'s preparing an offer by filling out the Real Estate Purchase Contract (REPC) sign the Earnest Money Receipt portion of the document?',
		'A1' : 'When he/she has the deposit in hand.',
		'A2' : 'When the buyer has indicated how much the earnest money will be.',
		'A3' : 'As soon as he/she knows what form the earnest money will be.',
		'A4' : 'Before the buyer has initialed the first page.',
		'Correct' : 'A1',
		'Response' : 'The receipt should never be signed unless the payment has been received.'
	},
	
	{
		'Q' : 'When could an agent fill out an offer using a contract other than the state approved Real Estate Purchase Contract?',
		'A1' : 'When the sales contract was prepared by the buyer\'s attorney.',
		'A2' : 'When the sales contract was prepared by the agent\'s principal broker.',
		'A3' : 'When the buyer has requested that a different kind of contract be used.',
		'A4' : 'When the sellers insisted on a contract they, themselves, had drafted.',
		'Correct' : 'A1',
		'Response' : 'A real estate licensee may fill in a different sales contract if it was prepared by an attorney for either party in the transaction.  A licensee is never authorized to draft (or create) contracts, and even though an attorney may have drafted it, if it was the broker\'s attorney, it can\'t be used (unless the broker is the buyer or seller).'
	},
	
	{
		'Q' : 'If, in evaluating the seller\'s disclosures, the buyers discover something unsatisfactory, what does the REPC indicate should be done?',
		'A1' : 'Within the deadline, either cancel the contract or resolve any objections with the seller.',
		'A2' : 'The seller must correct the problem within 10 days.',
		'A3' : 'The seller has the right to then void the contract.',
		'A4' : 'The buyer has five days within which to give written notice of the objection.',
		'Correct' : 'A1',
		'Response' : 'If the buyer objects to something, the seller does not have to fix it.  Before the deadline, 1) they either agree in writing (in an addendum) to the seller\'s repairs, or 2) the buyer cancels the contract.  If neither of those happen by the deadline, it\'s assumed everything is okay with the buyer and the deal moves ahead.'
	},
	
	{
		'Q' : 'According to Section 6.2 of the REPC, if available, which of the following policies of title insurance will be provided by the seller?',
		'A1' : 'The most current version of the ALTA Homeowner\'s Policy',
		'A2' : 'ALTA Owner\'s policy',
		'A3' : 'An Extended Eagle policy',
		'A4' : 'A Standard Coverage policy',
		'Correct' : 'A1',
		'Response' : 'This is what is stated:  1) ALTA Homeowner\'s Policy from closing title company or, 2) ALTA Homeowner\'s Policy from a title company of the buyers\' choice or, 3) ALTA Owner\'s Policy (Standard Coverage Owner\'s Policy).'
	},
	
	{
		'Q' : 'According to Section 10.2 of the REPC, which has to do with the condition of the property, what is true about the warranties made by the seller to the buyer?',
		'A1' : 'The property is being sold "as is," with no warranties.',
		'A2' : 'Though the property is being sold "as is," the seller does warrant the disclosures in the Seller Property Condition Disclosure document.',
		'A3' : 'The buyer has a due diligence period in order to determine what warranties will be required of the seller.',
		'A4' : 'Though all the warranties that used to be in 10.2 don\'t exist any more, there are just a few basic warranties still included.',
		'Correct' : 'A1',
		'Response' : 'There are no warranties whatsoever.  Therefore, the buyers\' own due diligence before that deadline is crucial.  They can cancel out of the deal before that deadline.'
	},
	
	{
		'Q' : 'Who is responsible for the accuracy of the settlement statement, regardless of where the settlement is held?',
		'A1' : 'The principal broker',
		'A2' : 'The agent working with the client',
		'A3' : 'The title company',
		'A4' : 'The loan officer',
		'Correct' : 'A1',
		'Response' : 'Regardless of where or by whom the settlement is conducted, it is the principal broker\'s responsibility to see that the numbers are accurate and the required documents are prepared accurately, and, where applicable, are recorded.'
	},
	
	{
		'Q' : 'The purpose of the Real Estate Recovery Fund is to:',
		'A1' : 'reimburse the public for damages caused by dishonest licensees.',
		'A2' : 'recover funds from clients who have refused to pay earned commissions.',
		'A3' : 'provide funds for educating people so they can obtain a real estate license.',
		'A4' : 'provide funds to prosecute licensees who violate the rules and regulations of the Division of Real Estate.',
		'Correct' : 'A1',
		'Response' : 'Licensees contribute to this fund with part of the licensing fee or fines from disciplinary actions.  Many years ago real estate licensees had to bond themselves.  The recovery fund replaced that.'
	},
	
	{
		'Q' : 'Regardless of the dollar amount granted by the court in a suit against a real estate licensee, the plaintiff could not collect more than the following amount from the Real Estate Recovery Fund for a single violation:',
		'A1' : '$10,000',
		'A2' : '$100,000',
		'A3' : '$6,000',
		'A4' : '$60,000',
		'Correct' : 'A1',
		'Response' : 'The $10,000 limit is set by statute.  The $100,000 number is the minimum the fund must have at the beginning of the fiscal year to use monies for education and research.'
	},
	
	{
		'Q' : 'Judd Jackson hates to keep unnecessary documents around the office where he is the principal broker.  On the other hand, he is meticulous about obeying laws, rules and regulations relating to the office.  On July 14, 2002 one of his salespersons brought a signed listing agreement to the office.  On what date will Judd be able to legally throw that listing agreement away?',
		'A1' : 'Jan. 1, 2006',
		'A2' : 'Aug. 15, 2004',
		'A3' : 'July 15,2006',
		'A4' : 'Jan. 1, 2005',
		'Correct' : 'A1',
		'Response' : 'Records have to be kept for three calendar years following the year of the transaction.'
	},
	
	{
		'Q' : 'When a broker places more than $500 of his/her own money in The Real Estate Trust Account, that:',
		'A1' : 'is commingling and could cause his/her license to be suspended or revoked.',
		'A2' : 'must not be more than $100 of the broker\'s own funds, and must not be there over 30 days.',
		'A3' : 'makes the broker guilty of dual deposits, and he/she will have to show just cause for those actions.',
		'A4' : 'is following standard legal practice in the real estate profession.',
		'Correct' : 'A1',
		'Response' : 'In Utah, this is the definition of commingling and is illegal.  The word for the opposite of commingling is segregation.  The only reason for the $500, is to take care of service charges for the account.'
	},
	
	{
		'Q' : 'The Real Estate Division might order an independent audit of the broker\'s records by a CPA if, upon examination by the Division\'s investigator, there is evidence of the following things.',
		'A1' : 'Gross mismanagement',
		'A2' : 'Suspected moral turpititude',
		'A3' : 'No branch manager',
		'A4' : 'Sales agents\' commissions aren\'t stipulated in employment agreements.',
		'Correct' : 'A1',
		'Response' : 'The Real Estate Division has a team of investigators who inspect trust accounts and records.  If they find something that looks like deliberate fraud, or gross mismanagement, they might order an audit by a CPA firm and it will be paid for by the broker.'
	},
	
	{
		'Q' : 'Broker Dean manages a fourplex for seller James.  Dean found four renters and collected $100 security deposit from each.  The seller then decided to sell the fourplex.  Broker Dean found a buyer, who gave $500 as earnest money on an offer to purchase the fourplex for $135,000.  The seller accepted the offer.  The buyer asked Dean to keep the balance of the down payment, which was $45,000, until closing.  How much money would the Broker Dean have deposited into the Real Estate Trust Account as a result of this entire transaction?',
		'A1' : '$45,900',
		'A2' : '$45,500',
		'A3' : '$45,600',
		'A4' : '$500',
		'Correct' : 'A1',
		'Response' : 'All money belonging to other people must be placed in the trust account.  Therefore, $100 security deposits X 4 = $400 + $500 earnest money deposit + $45,000 down payment  = $45,900.'
	},
	
	{
		'Q' : 'Buyer Kendall has entered into a purchase agreement with Seller Johnson to purchase Johnson\'s home.  Kendall gave Broker Martin $1,000 earnest money to be kept in trust.  Three weeks after the offer was signed by both parties, Buyer Kendall decided not to buy the house, and backed out of the deal.  How much of the earnest money belongs to the Broker?',
		'A1' : 'As much as the buyer and seller agree in writing.',
		'A2' : 'All of it, up to the amount of the broker\'s commission.',
		'A3' : 'Only enough to cover the broker\'s out-of-pocket expenses.',
		'A4' : 'Half of it, if the seller releases it to the buyer.',
		'Correct' : 'A1',
		'Response' : 'The broker has no right to any of the earnest money unless it is agreed to in writing by both parties to the transaction.'
	},
	
	{
		'Q' : 'Which of the following statements is NOT true in regards to a real estate trust account?',
		'A1' : 'Under no circumstances can interest be paid on any trust account.',
		'A2' : 'Interest can be used to help with affordable housing.',
		'A3' : 'Interest can be paid when a separate trust account is opened.',
		'A4' : 'Both buyer and seller must agree on the interest arrangement.',
		'Correct' : 'A1',
		'Response' : 'Though the real estate trust account cannot, under any circumstances, earn interest, separate accounts can be set up for affordable housing or in the best interest of the buyer and seller.  The application of each of these exceptions requires agreement of both the buyer and seller.'
	},
	
	{
		'Q' : 'If the broker\'s attempt at mediation over disputed earnest money failed, what is the broker\'s next legal obligation regarding the funds?',
		'A1' : 'Leave them in a disputed funds trust account and wait for instructions from the court.',
		'A2' : 'File an interpleader action with the court.',
		'A3' : 'Report the situation, in writing, to the Real Estate Division.',
		'A4' : 'Inform buyer and seller in writing that there is an irrevocable dispute.',
		'Correct' : 'A1',
		'Response' : 'The broker can only disburse trust monies in three ways:  1)  according to the agreement, 2) with a written release from the party not getting the funds, and 3) as directed by the court.  While waiting for directions from the court or one of the parties to sign a release, the funds should be placed in a "disputed funds" trust account.'
	},
	
	{
		'Q' : 'According to the law found in UCA 61-2, any amount of earnest money deposit tendered when the offer is written should be deposited when?',
		'A1' : 'Within three business days.',
		'A2' : 'Within three business days after acceptance.',
		'A3' : 'Within three calendar days of receipt.',
		'A4' : 'If the earnest money is cash, it requires immediate deposit.',
		'Correct' : 'A1',
		'Response' : 'Though the Real Estate Purchase Contract allows the broker to wait until the offer has been accepted before the three days start ticking off for depositing the earnest money, that is an exception to the statutory requirement to deposit the earnest money within three business days after receiving it.  There are several other exceptions listed.  The key is that when applying any of the exceptions, both parties have agreed to it in writing.  In signing the REPC, both are agreeing it will be within three business days after acceptance.'
	},
	
	{
		'Q' : 'Ruby Fudd is interested in getting her sales agent real estate license.  She got a degree from a state university in finance five years ago.  Ruby took two classes in real estate finance, but no actual classes in real estate licensing preparation.  How many hours of real estate licensing will she have to obtain in order to qualify to take the state real estate sales agent examination?',
		'A1' : 'Ruby will have to take the full 90 hours required for anyone else.',
		'A2' : 'Her university classes qualify Ruby.',
		'A3' : 'Ruby will have to take the full 60 hours required for anyone else.',
		'A4' : 'Depending on the decision of the Real Estate Division, Ruby could have 30 or 60 hours waived.',
		'Correct' : 'A1',
		'Response' : 'The only circumstances under which the 90 hours or any part thereof can be waived is a lawyer who has passed the bar, or someone who has taken prelicensing hours in another state and has them approved by the Utah Real Estate Division.'
	},
	
	{
		'Q' : 'The Real Estate Commission is made up of:',
		'A1' : 'four licensees and one non-real estate professional.',
		'A2' : 'brokers only.',
		'A3' : 'a chairman and five other members.',
		'A4' : 'the director and five other members.',
		'Correct' : 'A1',
		'Response' : 'There are five commissioners, four licensees and one commissioner-at-large who represents the public sector.  One of the five is selected to be the chairman of the commission.  The director is a separate position altogether.'
	},
	
	{
		'Q' : 'Adam Schaefer, a general contractor, developed a housing tract which he now is ready to market. He wants to avoid paying a commission to a brokerage, yet he wants to have a sales force selling the homes.  Which of the following can he legally do?',
		'A1' : 'He can meet the requirements to obtain a broker\'s license, activate it, and hire his sales people.',
		'A2' : 'Since he is a general contractor as well as the owner of the development, he can simply hire licensed real estate sales people and market the project.',
		'A3' : 'He has no alternative except to hire a broker if he wants sales people to sell the homes.',
		'A4' : 'He can hire a salesperson with two years of real estate sales experience and let her manage the sales force and the selling of the property.',
		'Correct' : 'A1',
		'Response' : 'Schaefer has only two choices, become a broker himself or hire a broker.  Though owners can sell their own property without a license, they cannot hire sales agents to do so unless they are supervised by a principal broker.'
	},
	
	{
		'Q' : 'How is the Real Estate Director chosen? ',
		'A1' : 'Appointed by the Executive Director of the Department of Commerce	',
		'A2' : 'Appointed by the Real Estate Commission',
		'A3' : 'Appointed by the Governor',
		'A4' : 'Elected by the public',
		'Correct' : 'A1',
		'Response' : 'This is just a matter of fact.'
	},
	
	{
		'Q' : 'When a principal broker is renewing his/her license, in addition to verifying the necessary continuing education, what other information must be provided?',
		'A1' : 'A business name current and in good standing with the Dept. of Corporations',
		'A2' : 'A valid lease or deed where the business is operating',
		'A3' : 'A trust account with at least $500 in the balance',
		'A4' : 'Verify no complaints to the Division about the broker',
		'Correct' : 'A1',
		'Response' : 'The broker must obtain the necessary continuing education, confirm the business name, and verify an active trust account -- but the Division has no minimum balance requirement for the trust account. '
	},
	
	{
		'Q' : 'Raelene Quin had been a broker for a number of years.  Unfortunately, she "bent the rules" a number of times, and it finally caught up with her.  As a result of disciplinary action before the Real Estate Commission, she lost her license.  She has now learned her lesson and is ready to mend her ways.  Which of the following is true regarding her getting back into the real estate business as a broker.',
		'A1' : 'She must start from scratch to get her sales license.',
		'A2' : ' In three years after that, she can do the same for her broker license.',
		'A3' : 'She will not be able to be a broker again, but can get a sales license.',
		'A4' : 'After a six-month probation period she can take the 12 hours of Utah Law or pass the Utah Law exam and have her license reinstated.',
		'Correct' : 'A1',
		'Response' : 'She can immediately take the 120 hour broker class, pass the broker State Exam and get her license.	She must wait five years and then, if approved by the commission, she can start over as though she never previously had a license.'
	},
	
	{
		'Q' : 'When naming a branch office, the name must be:',
		'A1' : 'The same as the main office',
		'A2' : 'Distinctly different from the main office',
		'A3' : 'Can be either the same as or different from the main office',
		'A4' : 'Will be dictated by the Division of Corporations',
		'Correct' : 'A1',
		'Response' : 'A branch office must have the same name as the main office. '
	},
	
	{
		'Q' : 'In order to obtain a real estate license the candidate must be at least:',
		'A1' : '18 years old.',
		'A2' : '21 years old.',
		'A3' : 'There is no age requirements',
		'A4' : '16 years old.',
		'Correct' : 'A1',
		'Response' : 'It is a matter of fact that the candidate must be at least 18 years old.'
	},
	
	{
		'Q' : 'Who can legally manage a real estate branch office?',
		'A1' : 'Only an associate broker',
		'A2' : 'Only a principal broker',
		'A3' : 'A sales agent with five years\' experience.',
		'A4' : 'An associate broker or the principal broker.',
		'Correct' : 'A1',
		'Response' : 'The principal broker manages the main office, and cannot also manage a branch office.  A branch office must be managed by an associate broker.  No amount of experience allows a sales agent to be a branch manager.'
	},
	
	{
		'Q' : 'An individual applying for a non-resident license must sign a(n):',
		'A1' : 'Irrevocable Consent',
		'A2' : 'Power of Attorney',
		'A3' : 'Cease and Desist order',
		'A4' : 'Unlawful Detainer',
		'Correct' : 'A1',
		'Response' : 'An irrevocable consent form must be signed certifying that if they are sued in the state of Utah, they will come to Utah to appear in court.  A power of attorney authorizes someone to act as an attorney in fact and sign documents for another.  A cease and desist order is issued by the court to stop a person\'s activities.  Unlawful detainer is used to evict a tenant.'
	},
	
	{
		'Q' : 'Which of the following need NOT be reported to the Real Estate Division within ten days?',
		'A1' : 'Notice of compliance with a corrective notice',
		'A2' : 'Conviction of a criminal offense',
		'A3' : 'Change of name, i.e., marriage',
		'A4' : 'Filing of a personal or brokerage bankruptcy',
		'Correct' : 'A1',
		'Response' : 'The corrective notice requires that the correction be made and reported within 30 days.  All of the others require a ten-day notice.  A licensee changing brokerages, or a broker terminating a licensee requires three-days notice.'
	},
	
	{
		'Q' : 'To obtain a broker license, the candidate must complete how many additional hours of licensing education to that received in obtaining a sales agent license?',
		'A1' : '120',
		'A2' : '90',
		'A3' : '30',
		'A4' : '150',
		'Correct' : 'A1',
		'Response' : 'This is a matter of fact. The New Construction Real Estate Purchase Contract contains the following information regarding a warranty:	The property can be warranted for one year.	There is no specific warranty.	It is warranted up to the day of possession.	It comes with a homeowner warranty from a third party provider.	The buyer making the offer can mark the section appropriately to request a one-year warranty.  In the standard Real Estate Purchase Contract, the property is only warranted until the time of possession.'
	},
	
	{
		'Q' : 'With a fixed cost contract, which of the following is NOT true?',
		'A1' : 'If it ends up costing more than was originally projected, the added costs are passed on to the buyer',
		'A2' : 'There is an incentive to the builder to have subcontractors work in a timely manner.',
		'A3' : 'It benefits the buyer because he/she knows from the beginning what the end cost will be.',
		'A4' : 'This option is more favorable to the buyer than the seller.',
		'Correct' : 'A1',
		'Response' : 'Except for added features and their costs which the buyer agrees to in writing, any cost overruns will have to be borne by the builder/seller.'
	},
	
	{
		'Q' : 'The New Construction Real Estate Purchase Contract allows for the purchase price on the home to be increased if:',
		'A1' : 'A written change order was signed in advance by the buyer.',
		'A2' : 'The builder gives the buyer 10 days notice of the reason for and amount of the increase.',
		'A3' : 'The increase is caused by something the builder could not control.',
		'A4' : 'The buyer is given adequate notice, and the notice is in writing.',
		'Correct' : 'A1',
		'Response' : 'A contract is a contract.  Unless the buyer agreed to a cost plus type of contract, the purchase price can not be raised for any reason unless the buyer signs agreement.  With cost plus, the buyer agreed to pay whatever the costs for the building process were (and those could certainly end up higher than anticipated), plus a certain amount for the builder\'s profit.'
	},
	
	{
		'Q' : 'According to the New Construction Real Estate Purchase Contract, what happens if the buyer and seller can\'t agree upon the manner of resolving an objection of the buyer?',
		'A1' : 'The seller doesn\'t have to fix it, but the deal would be off.',
		'A2' : 'It becomes a contract voidable by either party.',
		'A3' : 'There can be no disagreement, as the seller has to fix anything not to the buyer\'s satisfaction.',
		'A4' : 'The seller doesn\'t have to fix it, and it\'s voidable for the buyer only.',
		'Correct' : 'A1',
		'Response' : 'This is simply a matter of the wording in the contract.  The seller is not bound to do what the buyer wants regarding this matter.  The seller can leave it the way it is and sell the home to someone else.'
	},
	
	{
		'Q' : 'A woman has seven children and a husband.  Two of the children have married and moved away, the others are still living at home.  Under the Utah Exemption Act, what exemption could she claim if she became involved in foreclosure proceedings on her home?',
		'A1' : '$40,000',
		'A2' : '$8,000',
		'A3' : '$20,000',
		'A4' : '$12,000',
		'Correct' : 'A1',
		'Response' : 'The homestead exemption is $20,000 for head of household and $20,000 for a spouse for a maximum total of $40,000.  Therefore, this married woman could protect $40,000.  There is no exemption for dependents.'
	},
	
	{
		'Q' : 'To terminate a homestead exemption, one would record:',
		'A1' : 'a notice of abandonment.',
		'A2' : 'a termination of homestead.',
		'A3' : 'a release of lien',
		'A4' : 'a notice of release of homestead.',
		'Correct' : 'A1',
		'Response' : 'This is simply a matter of fact - that is what it is officially called.  One is abandoning the claim for an exemption, not the actual property.'
	},
	
	{
		'Q' : ' A release of lien is recorded when the debt that caused the mechanic to file a lien gets paid. In order to place a mechanic\'s lien against a property, the person must be able to prove that;',
		'A1' : 'work or material was integrated into the property.',
		'A2' : 'work or material was valued in excess of $2,000.',
		'A3' : 'work or material was ordered by a general contractor.',
		'A4' : 'the mechanic is a licensed general contractor or sub-contractor.',
		'Correct' : 'A1',
		'Response' : 'The work, service, or material must become part of the property.  This could include the contractor, subcontractor, material supplier, laborer.'
	},
	
	{
		'Q' : 'George Appleton had done some plumbing for Bill Pearpound.  He went to Mr. Pearpound and requested payment.  Mr. Pearpound immediately sat down and wrote out a check for the entire amount,  much to Mr. Appleton\'s surprise.  If Mr. Pearpound is a wise businessman, he will require Mr. Appleton to give him a/an:',
		'A1' : 'lien waiver.',
		'A2' : 'release of lien.',
		'A3' : 'abandonment of debt.',
		'A4' : 'notice of abandonment.',
		'Correct' : 'A1',
		'Response' : 'With a lien waiver, Mr. Appleton is waiving any right to place a lien in the future for these services.  A release of lien would be appropriate if the lien was already in place.  A notice of abandonment is for abandoning a claim under the exemption act.'
	},
	
	{
		'Q' : 'A developer wants to build a high-rise apartment building with underground parking.  Which of the following water issues might need to be considered?',
		'A1' : 'The water table',
		'A2' : 'Water shares',
		'A3' : 'Acre feet of water',
		'A4' : 'Second feet of water',
		'Correct' : 'A1',
		'Response' : 'A shallow water table could eliminate being able to go deep enough for underground parking.  The other answers have no impact on the construction of the building.  Water shares are like stock in some other entity\'s water rights.  Acre feet measures volume of water, and second feet measures the flow of water.'
	},
	
	{
		'Q' : 'The Jacksons contracted Alan Berry, a general contractor, to build a home for them.  Mr. Berry employed  Mary Hubert as a subcontractor to do the plumbing.  Hubert then hired Franklin to actually do the plumbing.  A mechanic\'s lien was placed on this property when the Jacksons failed to pay.  In the foreclosure sale, there was not enough money realized to pay all of those who held liens against the property, which of the above would be paid first?',
		'A1' : 'Franklin, the laborer',
		'A2' : 'Alan Berry, the general contractor',
		'A3' : 'Mary Hubert, the subcontractor',
		'A4' : 'It would be prorated between all of them.',
		'Correct' : 'A1',
		'Response' : 'The priority has been established by statute, and it is to pay the laborer first, the subcontractor (or material supplier) next, and the general contractor last.'
	},
	
	{
		'Q' : 'The Kamerons are selling their property, and want to sell their two shares of stock in a mutual water company to their son next door.  Can they sell the water shares separate from the real property?',
		'A1' : 'Yes.  Since shares in a mutual water company are personal property, and are transferred with a bill of sale.',
		'A2' : 'Yes, but only if the buyers agree they are not getting the water shares.',
		'A3' : 'No, while shares of stock are personal property, they are always appurtenant to the land and cannot be sold separately.',
		'A4' : 'No.  Water rights, regardless of what kind, are always appurtenant to the land.',
		'Correct' : 'A1',
		'Response' : '	Water rights are real property and pass with a deed.  It is possible to sell them separate from the land.  Water shares are personal property, and can be sold separately unless the contract with the water company specifies otherwise.  There are some areas in Utah where water rights or shares cannot be separated from the land.'
	},
	
	{
		'Q' : 'The awarding of water rights in the state of Utah is primarily determined by:',
		'A1' : 'beneficial use',
		'A2' : 'the volume of water measured in acre feet.',
		'A3' : 'the type of ownership interest held in the land.',
		'A4' : 'water flow measured in second feet.',
		'Correct' : 'A1',
		'Response' : 'When various parties are seeking the right to the same water, the state engineer will first consider the principal of beneficial use.  Culinary water is the highest use, followed closely by agriculture uses.'
	},
	
	{
		'Q' : 'Swenson\'s neighbor has not been using his water rights for the past six years.  Swenson diverts the water to his property.  When the neighbor realizes it, he demands his water back.  Swenson refuses, telling him he has lost his rights through abandonment.  What will most likely happen if either of them take the case to court?',
		'A1' : 'The neighbor will lose rights to the water, since the five-year period for abandonment has passed, but Swenson has no legal claim to the water.',
		'A2' : 'Swenson will win, since Utah believes water is so precious no one has the right to leave it unused.',
		'A3' : 'Since the statutory period is five years, the water will be given to Swenson.',
		'A4' : 'The neighbor can retain the water rights only if he pays both Swenson and the State of Utah.',
		'Correct' : 'A1',
		'Response' : 'You lose a water right in Utah by not using it (abandonment) for five years.  However, the water would revert to the state.  To get the rights, Swenson would have to make application to the office of the State Engineer, Division of Water Rights.'
	},
	
	{
		'Q' : 'The three pigs finished their homes, and subsequently disposed of the big bad wolf. They decided to obtain water rights for the small farms they owned around their respective homes (which incidentally are now all made of brick).  The first little pig made his application to the State Water Commission.    The second made his application to the Utah State Engineer.  And the third little pig applied to the Utah Division of Natural Resources.   Which of the three pigs had applied to the proper agency?',
		'A1' : 'The second little pig',
		'A2' : 'The first little pig',
		'A3' : 'The third little pig',
		'A4' : 'Too bad, none of the little pigs will be successful.',
		'Correct' : 'A1',
		'Response' : 'All applications are made to the Office of the State Engineer, Division of Water Rights.'
	},
	
	{
		'Q' : 'J wants to buy a certain property with a well located within the property\'s boundaries.  J wants to know if he/she has the right to use this water.  Where should J check on the status of the well?',
		'A1' : 'The Division of Water Rights.',
		'A2' : 'The Utah Real Estate Division.',
		'A3' : 'The Water Commissioner\'s Office.',
		'A4' : 'The Zoning and Planning Commission, Water Department.',
		'Correct' : 'A1',
		'Response' : 'This is the statutory responsibility of the Division of Water Rights within the State Engineer\'s Office.'
	},
	
	{
		'Q' : 'According to the Utah Exemption Act, which of the following debts of the homeowner would have to wait until after the homestead exemption had been granted?',
		'A1' : 'Unpaid hospital bills of $23,000',
		'A2' : 'First mortgage of $50,000 payable to the savings and loan association',
		'A3' : 'Second mortgage from a mortgage company in the amount of $18,000',
		'A4' : 'Unpaid property taxes',
		'Correct' : 'A1',
		'Response' : 'The person filing under the act cannot protect themselves against security interests against the property which they voluntarily agreed to, taxes, or unpaid child support.  They would get their protected amount ahead of the hospital bills, which are a personal debt.'
	},
	
	{
		'Q' : 'The Residence Lien Restriction and Lien Recovery Fund Act offers protection regarding the issue of labor and material involved in new construction.  What party receives the protection if the proper steps are followed?',
		'A1' : 'Homeowners',
		'A2' : 'General contractors',
		'A3' : 'Subcontractors and material suppliers',
		'A4' : 'Unlicensed laborers',
		'Correct' : 'A1',
		'Response' : 'This act protects against a situation where a homeowner paid the general contractor in full but the contractor didn\'t pay the subs or material suppliers, so they placed liens on the property.  This could result in the homeowner paying several times over for the same work.'
	},
	
	{
		'Q' : 'How is the Residence Lien Restriction and Lien Recovery Fund Act funded?',
		'A1' : 'A fee charged to the general contractor',
		'A2' : 'A fee split between the contractor and the homeowner',
		'A3' : 'The licensing fees for contractors',
		'A4' : 'The same source as the Real Estate Recovery Fund Act',
		'Correct' : 'A1',
		'Response' : 'The fee is only paid by general contractors.'
	},
	
	{
		'Q' : 'Which of the following does not fit with the State Construction Registry?',
		'A1' : 'Notice of Commencement - $7.50 - 20 days',
		'A2' : 'Notice of Commencement - $7.50 - 15 days',
		'A3' : 'Preliminary Notice - $1.00 - 20 days',
		'A4' : 'Notice of Completion - $7.50',
		'Correct' : 'A1',
		'Response' : 'The Notice of Commencement is filed within 15 days of the permit or start of work.  Any subs, suppliers or laborers wanting to restore their rights file a Preliminary Notice within 20 days of starting their work.  An email is automatically generated to the contractor informing of this new entity and its rights.  The Notice of Completion is filed after a Certificate of Occupancy, a final inspection, or substantial completion (it is being used for the purpose for which it was contracted).'
	},
	
	{
		'Q' : 'Which of the following definitions is NOT accurate for the UCA 57-1 descriptions of a stigmatized property?',
		'A1' : 'Reported to be haunted',
		'A2' : 'Suspected site of murder, other felony, or suicide',
		'A3' : 'Home of someone infected with AIDS',
		'A4' : 'A previous meth lab which has been decontaminated in accordance with health department requirements',
		'Correct' : 'A1',
		'Response' : 'Haunted houses aren\'t mentioned in this law.'
	},
	
	{
		'Q' : 'Is there any where in the REPC that the issue of possible sex offenders living in the vicinity of the offered property is addressed?',
		'A1' : 'Under Section 8.1 (a) Due Diligence Items',
		'A2' : 'It is not mentioned anywhere in the contract',
		'A3' : 'Under Section 7, Seller Disclosures',
		'A4' : 'Under Section 10.3, Condition of Property/Seller Acknowledgments',
		'Correct' : 'A1',
		'Response' : 'Since the property is being sold "as is," the buyer conducting a thorough due diligence is essential.  In Section 8.1(a) there are many issues mentioned that should be very important to any prudent buyer, and they should research those issues to their own satisfaction.  One of the things specifically mentioned is convicted sex offenders living in proximity to the property.'
	},
	
	{
		'Q' : 'Betty Flintrock, a sales agent acting as a subagent for the seller, successfully negotiated a Real Estate Purchase Contract between a seller and buyer which was fully executed by both parties.  What is Betty\'s responsibility so far as distribution of copies of the contract are concerned?',
		'A1' : 'Deliver copies to the buyer (or buyer\'s agent), seller and the original to her broker immediately',
		'A2' : 'Deliver copies to the seller only, as the other agent will get a copy to the buyer.',
		'A3' : 'See that the broker gets a copy within three business days.',
		'A4' : 'Keep a copy herself, and give copies to each of the parties involved, if they request one.',
		'Correct' : 'A1',
		'Response' : 'The basic rule is to make sure that all parties have a copy of the fully executed contract, as well as all agents and subagents. '
	},
	
	{
		'Q' : 'A principal broker can do all of the following for a client EXCEPT?',
		'A1' : 'Create the contracts necessary to transfer the property.',
		'A2' : 'Arrange a sale of real property.',
		'A3' : 'Arrange a lease or option of real property.',
		'A4' : 'Conduct an auction of listed real property.',
		'Correct' : 'A1',
		'Response' : 'Agents who are not attorneys are not authorized by their real estate license to draft contracts.  They are authorized to fill in blanks in state approved forms or other contract forms prepared by attorneys.'
	},
	
	{
		'Q' : 'If a salesperson placed an ad in the paper or put a sign on a property he/she had listed, without giving the name of the brokerage, this would be called a:',
		'A1' : 'blind ad.',
		'A2' : 'legal and proper sign.',
		'A3' : 'sign by estoppel.',
		'A4' : 'deaf sign.',
		'Correct' : 'A1',
		'Response' : 'The rule is clear, "All advertising must appear over the name of the brokerage."  No blind ads!'
	},
	
	{
		'Q' : 'The sellers are trying to sell their house.  They want to get $50,000 cash from the sale to use for a down payment on the next home.  They tell Agent Sowell that whatever she sells it for above $50,000, she can keep for her commission.  What is true of such an arrangement?',
		'A1' : 'This is a net listing is prohibited in Utah.',
		'A2' : 'Though unusual, but there is nothing illegal about the arrangement.',
		'A3' : 'The listing is legal as long as Agent Sowell discloses to any prospective buyers that everything over $50,000 will be her commission.',
		'A4' : 'Agent Sowell can accept this listing so long as she fully discloses how she is being paid.',
		'Correct' : 'A1',
		'Response' : 'This is a good example of a net listing.  Net listings are prohibited in Utah since they give too much opportunity to take unfair advantage of a seller.'
	},
	
	{
		'Q' : 'A builder hires a secretary with no real estate license to sit in a model home in a development and show the property to prospective buyers.  The secretary also coordinates subcontractors and acts as a receptionist for potential buyers.  The secretary is paid entirely by salary.  Is it necessary for the secretary to have a real estate license?',
		'A1' : 'Yes, because the secretary is working with potential buyers in a property that is being offered for sale.',
		'A2' : 'Yes, because the builder didn\'t have a broker license, therefore the secretary is required to have one.',
		'A3' : 'No, because licenses are only required when payment is by commission.',
		'A4' : 'No, as long as the secretary does not fill out any contracts it is legal.',
		'Correct' : 'A1',
		'Response' : '	This secretary is working as an unlicensed real estate agent.  Even if the developer was a principal broker, an unlicensed person cannot show property, quote prices, or give any information about the property.  The secretary could act as a receptionist and hand out brochures.'
	},
	
	{
		'Q' : 'Which of the following is true about the activities of an unlicensed assistant?',
		'A1' : 'He/she may make an appointment with a buyer who wants to see property, upon the buyer\'s request.',
		'A2' : 'Assistants can assist the licensee in all of their real estate activities.	',
		'A3' : 'Assistants are especially useful in cold calling "for sale by owners" to try to get listing appointments.',
		'A4' : 'He/she can attend the open house and show buyers around when the licensee is already with someone.',
		'Correct' : 'A1',
		'Response' : 'The unlicensed assistant can make appointments with people the sales agent has already contacted, but they can\'t do cold calling, be at an open house alone, show property or give information about property regardless of the circumstances.'
	},
	
	{
		'Q' : 'Often Sales agent S sold properties to people new to the area who had been referred by mutual friends.  To show appreciation to the friends what is S allowed to do?',
		'A1' : 'Give a gift up to $50 if the referral was unsolicited.',
		'A2' : 'Give a gift certificate for dinner for two for $100.',
		'A3' : 'Give the friend a new microwave oven as thanks.',
		'A4' : 'Give them something worth $50 and request they send more referrals for the same.',
		'Correct' : 'A1',
		'Response' : 'The key to this is "unsolicited."  If the same friend did this over and over it begins to take on the nature of a solicited referral.  The limit is $50.'
	},
	
	{
		'Q' : 'The accuracy of the listing contract is the responsibility of the:',
		'A1' : 'Sales agent who took the listing',
		'A2' : 'Principal broker of the listing agent',
		'A3' : 'Sales agent and Principal broker on a shared basis',
		'A4' : 'Seller, who is supposed to review the listing carefully',
		'Correct' : 'A1',
		'Response' : 'The law clearly states that the content of the listing is the exclusive responsibility of the person who took the listing.  Of course, the principal broker always has the responsibility for supervising that person.'
	},
	
	{
		'Q' : 'Can a licensed or certified auctioneer auction real property in Utah under his/her own authority?',
		'A1' : 'Only if the auctioneer is a principal broker. Absolutely! ',
		'A2' : 'That is why the auctioneer was certified or licensed.',
		'A3' : 'Only if the auctioneer attended a "Real Property Auctioneer School"',
		'A4' : 'Only if registered with the Real Estate Division to do so.',
		'Correct' : 'A1',
		'Response' : 'Utah does not register auctioneers.  An auctioneer license or certification does not meet the standards for auctioning real property in Utah, and there is no such thing as a "Real Property Auctioneer School."  The auctioneer must either be a real estate broker, or hire a broker and have him/her present at the auction, supervising the writing of the contract, handling of earnest money, and the settlement and closing.'
	},
	
	{
		'Q' : 'To be valid, a listing must.',
		'A1' : 'be in writing.',
		'A2' : 'have a term of at least 30 days.',
		'A3' : 'be signed by both the seller and the buyer.',
		'A4' : 'contain an automatic renewal clause.',
		'Correct' : 'A1',
		'Response' : 'Listings, by law, must be in writing.  There is no minimum time period required, the buyer is not a party to a listing, and automatic renewal clauses are not allowed.  The listing must have a termination date'
	},
	
	{
		'Q' : 'When a licensee is marketing undivided fractionalized long-term estates, the information about the real property which must be disclosed includes all of the following EXCEPT:',
		'A1' : 'A copy of the articles of incorporation',
		'A2' : 'Leases or subleases',
		'A3' : 'Environmental issues',
		'A4' : 'Preliminary title report',
		'Correct' : 'A1',
		'Response' : 'In addition to the three items mentioned, financial statements, the Tenants in Common agreement, and a narrative appraisal must be included.'
	}

);

//utah 2
questions[7] = new Array(

	{
		'Q' : 'Which of the following is NOT an element of the REPC?',
		'A1' : 'Agency Contract	Document ',
		'A2' : 'Receipt	Offer to Purchase',
		'A3' : 'Earnest Money Receipt',
		'A4' : 'The three wrong answers all are distinct sections of the REPC.',
		'Correct' : 'A1',
		'Response' : 'The section in the contract that deals with agency is not an agency contract.  The first word in its title is "Confirmation."  Its purpose is not to create agency relationships, but to confirm the relationships previously entered into.'
	},
	
	{
		'Q' : 'Which of the following is NOT specified in the preprinted REPC contract?',
		'A1' : 'The property will have a one-year warranty.',
		'A2' : 'The seller will provide a standard policy of title insurance.',
		'A3' : 'The roof and foundation are free of leaks.',
		'A4' : 'Light bulbs are included in the sale.',
		'Correct' : 'A1',
		'Response' : 'The New Construction REPC has a provision for a one-year warranty, but the standard REPC does not.  If the buyer wanted one, that would be something to negotiate and document in an addendum.  The other answer choices are all there in print (the light bulbs are in Section 1.1).'
	},
	
	{
		'Q' : 'Under the Administrative Rules, a licensee is required to leave a copy containing all signatures of any document being signed.  If the buyers later allege they never received a copy of the REPC, what is the best protection for the broker and agent?',
		'A1' : 'After the offer is accepted, deliver a copy with all signatures and get the buyer\'s signature on a Transaction Documents Receipt or some other form of written receipt',
		'A2' : 'Be sure to FAX  a copy of the signed REPC to the buyers',
		'A3' : 'Hand deliver the copy with a witness accompanying you in that delivery',
		'A4' : 'Only deliver by mail with a return receipt required',
		'Correct' : 'A1',
		'Response' : 'A receipt signed by the recipient is the best risk protection in delivering not just the REPC, but any addenda or other documentation relating to the transaction.'
	},
	
	{
		'Q' : 'According to Section 8.4, if the sellers desire to have the buyers put additional earnest money into the sale, this would be triggered by what date?',
		'A1' : 'The later of the Due Diligence or Financing & Appraisal Deadlines',
		'A2' : 'The Seller Disclosure Deadline',
		'A3' : 'The Due Diligence Deadline',
		'A4' : 'The Settlement Deadline',
		'Correct' : 'A1',
		'Response' : 'This timing involves both the Due Diligence Deadline and the Financing & Appraisal Deadline.  They should be compared, and whichever comes later is the one to trigger any additional Earnest Money Deposit.'
	},
	
	{
		'Q' : 'In regards to Section 19 of the REPC relating to the issue of assignment, which of the statements that follows is true?',
		'A1' : 'The contract cannot be assigned without the written consent of the seller.',
		'A2' : 'The contract can be assigned, but not after the Due Diligence deadline.',
		'A3' : 'All contracts are assignable, and therefore the REPC can be assigned.',
		'A4' : 'If the buyer wanted to assign the contract to his brother\'s corporation that would be acceptable under Section 19.',
		'Correct' : 'A1',
		'Response' : 'The only assignment that would not need the sellers\' written consent would be to an entity in which the buyer has an ownership interest.'
	},
	
	{
		'Q' : 'Who must attend the settlement of a real estate transaction?',
		'A1' : 'The principal broker or his/her authorized representative.',
		'A2' : 'It is a good idea for the agent to attend, but not required.',
		'A3' : 'The title officer conducting the settlement can represent the broker.',
		'A4' : 'The loan officer who\'s been involved all along in preparing the loan.',
		'Correct' : 'A1',
		'Response' : 'The correct answer is exactly as it\'s worded here.  While it often happens the loan officer is there, they are representing the lender\'s side of the transaction and are not looking out for the buyer or seller.  The principal broker who represents the buyer or seller should be there with them, or the authorized representative, who must be a licensee.  Therefore, the title officer can\'t be the broker\'s representative.'
	},
	
	{
		'Q' : 'Some of the money for the Real Estate Recovery Fund is obtained from:',
		'A1' : 'fines charged to licensees by the Real Estate Division.',
		'A2' : 'a special grant from state income taxes.',
		'A3' : '.5 mills taken from the total property tax assessment of each taxing district.',
		'A4' : 'a portion of the fees paid to the National Board of Realtors.',
		'Correct' : 'A1',
		'Response' : 'When fines are assessed against licensees by the commission, the money goes into the recovery fund.  The only other source is a portion of the licensing and renewal fees.'
	},
	
	{
		'Q' : 'In order to obtain money from the Real Estate Recovery Fund, the claimant does NOT have to:',
		'A1' : 'present the case before the Real Estate Commission and obtain a decision from them granting a disbursement from the Recovery Fund.',
		'A2' : 'obtain a final judgment in court against the licensee.',
		'A3' : 'obtain a verified petition showing that the licensee has no means to satisfy the judgment.',
		'A4' : 'request the court to order payment by the Real Estate Division.',
		'Correct' : 'A1',
		'Response' : 'Since they are in court, it is not necessary to have the case heard by the R. E. Commission.'
	},
	
	{
		'Q' : 'What is one of the major characteristics of the Real Estate Trust Account?:',
		'A1' : 'It must not accrue interest.',
		'A2' : 'It must maintain a balance of $500.',
		'A3' : 'Only funds belonging to the brokerage can be deposited in it.',
		'A4' : 'It can be opened or closed depending on whether the principal broker has funds to deposit.',
		'Correct' : 'A1',
		'Response' : 'The real estate trust account can never accrue interest.  However, separate interest-bearing trust accounts can be set up with the agreement of both buyer and seller.  They also agree on who gets the interest.  There can be a separate account for the Utah Association of Realtors( Housing Opportunity Fund (UARHOF), again with the agreement of both the buyer and seller.'
	},
	
	{
		'Q' : 'Mark Hinckelheimer and Greta Buschmeyer enter into a Real Estate Purchase Contract.  Since the amount of the earnest money is $15,000, can it draw interest?',
		'A1' : 'Yes, if the parties agree to do so in writing, and also agree on the distribution of the interest.',
		'A2' : 'Yes,  if the parties agree to it.',
		'A3' : 'Yes, the Real Estate Trust Account must always bear interest.',
		'A4' : 'No, it must be an amount in excess or $25,000 before it can draw interest.',
		'Correct' : 'A1',
		'Response' : 'A separate trust account will be set up, when directed by the buyer and seller, so it can earn interest.  The real estate trust account (meaning the one that is established when the brokerage is opened and must be maintained even if there are no transactions going on) must remain free of accruing interest.'
	},
	
	{
		'Q' : 'Nearly eight months ago, Buyer Bainbridge gave a real estate agent a $1,000 earnest money check when he made an offer on a home.  The offer was accepted two days later.  To whom would the interest go that had accrued from  the $1,000?',
		'A1' : 'There would be no interest.',
		'A2' : 'The buyer',
		'A3' : 'The seller',
		'A4' : 'It would be determined by mediation.',
		'Correct' : 'A1',
		'Response' : 'The real estate trust account can\'t earn interest.'
	},
	
	{
		'Q' : 'Which of the following is NOT a purpose of The Real Estate Recovery Fund?',
		'A1' : 'Protect licensees against shady clients.',
		'A2' : 'Provide money for research by the Real Estate Division.',
		'A3' : 'Provide funds to reimburse the public for damages incurred because of dishonest licensees',
		'A4' : 'Provide money for the education of real estate agents.',
		'Correct' : 'A1',
		'Response' : 'The recovery fund gives the public protection against "shady" real estate agents, but not protection to agents against clients!  The other three are all purposes of this fund.'
	},
	
	{
		'Q' : 'Where are the Recovery Fund monies kept?',
		'A1' : 'In a segregated trust fund in the State Treasury	',
		'A2' : 'The Utah Association of Realtors Trust Account',
		'A3' : 'The Real Estate Division\'s Operating Fund',
		'A4' : 'A special fund established by the Real Estate Commission',
		'Correct' : 'A1',
		'Response' : 'Technically this money belongs to all licensed real estate agents, and therefore, if there is excess money it cannot be placed in the state\'s general fund.  When the amount builds up, the fee paid along with the licensing fee is reduced from time to time.'
	},
	
	{
		'Q' : 'The sales agent worked very hard to put the transaction together, but the seller defaulted at the last moment.  According to the REPC, what recourse do the buyers have?',
		'A1' : 'Get their earnest money back plus an equal amount from the seller as liquidated damages.',
		'A2' : 'Under the Statute of Frauds, they are entitled to triple damages.',
		'A3' : 'They get their own earnest money deposit back, and that\'s it.',
		'A4' : 'Take the sellers to court and sue for liquidated damages',
		'Correct' : 'A1',
		'Response' : 'The Real Estate Purchase Contract (REPC) states that if the seller defaults, they must pay the buyer an amount equal to the earnest money deposit as liquidated damages.  The earnest money deposit would be returned to the buyer.'
	},
	
	{
		'Q' : 'If a client feels a real estate agent has violated real estate laws or in other ways has committed illegal acts, and wants to collect from the Real Estate Recovery Fund, what is the first step.',
		'A1' : 'File a legal action against the licensee in court and notify the R. E. Division.',
		'A2' : 'File an official complaint against the licensee with the Real Estate Division.',
		'A3' : 'Have the licensee disciplined by the Real Estate Commission.',
		'A4' : 'Follow through with mediation and arbitration procedures.',
		'Correct' : 'A1',
		'Response' : 'If the claimant doesn\'t file for money from the outset, it will not be considered a proper claim.  In other words, if they wait until they win the suit before making a claim on the recovery fund, it will be to late to receive money from the fund.'
	},
	
	{
		'Q' : 'Agent Kelly wrote an  offer on a home he listed several months ago, using a Real Estate Purchase Contract.  The property was listed at $61,500 but the offer was made at $52,000.  The potential purchaser gave Kelly $1,000 earnest money, with the offer to be presented four days from then when the seller returned from a business trip.  What should Kelly do with the $500 earnest money check?',
		'A1' : 'Give it to the broker to be deposited in the Real Estate Trust Account as specified in the contract',
		'A2' : 'Deposit it in the trust account within three banking days of receiving it',
		'A3' : 'Kelly should keep it as part of his commission. ',
		'A4' : 'The balance will be given to him at closing.',
		'Correct' : 'A1',
		'Response' : 'Try to get the offer accepted or rejected before the five-day deadline for depositing the earnest money expires.	The key to this question is that the agent used a Real Estate Purchase Contract (REPC).  The REPC states that the clock doesn\'t start ticking for the earnest money deposit until after the offer has been accepted.  It is to be deposited within four calendar days after acceptance.  This exception to the basic three days for deposit law is approved by rule and regulation.'
	},
	
	{
		'Q' : 'A person would hold both a broker and sales license simultaneously only in what situation?',
		'A1' : 'One cannot hold a sales agent and broker license simultaneously under any circumstances.',
		'A2' : 'One or both of the licenses are placed on inactive status.',
		'A3' : 'The person is an independent principal broker and a sales agent for another broker at the same time.',
		'A4' : 'The person has received special permission from the Real Estate Commission.',
		'Correct' : 'A1',
		'Response' : '	When sales agents obtain a broker license, they must either be a principal broker or an associate broker.  Their sales agent license is replaced with the broker license.'
	},
	
	{
		'Q' : 'Which of the following is true concerning a Real Estate Commissioner-at-large?',
		'A1' : 'He/she is appointed by the governor.',
		'A2' : 'He/she serves a three year term.',
		'A3' : 'He/she can come from any county regardless of where the other four commissioners reside.',
		'A4' : 'He/she must have held a real estate license at some time in his/her life.',
		'Correct' : 'A1',
		'Response' : 'All five commissioners are appointed by the governor and serve a four-year term.  Five counties have to be represented on the commission.  The commissioner-at-large does not have a license and may or may not have had one at some time in the past.'
	},
	
	{
		'Q' : 'Which of the following are NOT duties and responsibilities of the Real Estate Commission?',
		'A1' : 'Arbitrate commission disputes between sales agents and their brokers.',
		'A2' : 'Supervise and administer the licensing test.',
		'A3' : 'Make and enforce rules and regulations.',
		'A4' : 'Examine records of licensed real estate principal brokers.',
		'Correct' : 'A1',
		'Response' : 'The Real Estate Division only has authority over those rules, regulations, and laws that directly pertain to the regulating of real estate licensees.  Commission disputes are a contract issue between broker and sales agent and must be handled in the courts.'
	},
	
	{
		'Q' : 'Which of the following is a responsibility of the Director of the Real Estate Division?',
		'A1' : 'Preparing a budget for the Real Estate Division',
		'A2' : 'Writing questions for the licensing examination',
		'A3' : 'Interviewing licensees when the public complains about them	Approving real estate laws to govern conduct of licensees',
		'A4' : 'The duties of the Director are carefully laid out in the rules and regulations.',
		'Correct' : 'A1',
		'Response' : 'Preparing a budget is one of them, the rest aren\'t.'
	},
	
	{
		'Q' : 'After completing the prelicensing course and successfully passing the State exam, which of the following will keep someone from having to take the test again?',
		'A1' : 'Get the license within 90 days from the successful test date.',
		'A2' : 'Get the license by a year from the school certificate date.',
		'A3' : 'Get the license within six months of the test.',
		'A4' : 'Get the license by one year from the testing date.',
		'Correct' : 'A1',
		'Response' : 'After passing the state exam a person has 90 days to pay for their license and either place it with a broker or make it inactive. Before taking the test, their 90 hours of education are good for one year.  If someone passes either Utah Law or the National section of the exam and fails the other, he/she has six months to successfully pass the other portion before being required to take both parts of the test again.  There is no restriction on how many times the exam can be taken.'
	},
	
	{
		'Q' : 'If there is a branch office, where should the records of branch transactions be kept?',
		'A1' : 'The main office or the branch, as appropriate.',
		'A2' : 'The main office and the branch office.',
		'A3' : 'The branch office until closing, then transferred to the main office.',
		'A4' : 'Only at the branch office.',
		'Correct' : 'A1',
		'Response' : 'This is left to the discretion of the broker, but he/she must keep the real estate division informed of the location of the records.'
	},
	
	{
		'Q' : 'If a broker has both a real estate office and a property management office, the name of the property management office:',
		'A1' : 'can be the same as the real estate office or different.',
		'A2' : 'must be the same as the main office.',
		'A3' : 'must be uniquely different from the main office.',
		'A4' : 'is selected by the real estate division',
		'Correct' : 'A1',
		'Response' : 'Though a branch office must have the same name as it\'s parent office, a property management company can be the same as the real estate office or different.'
	},
	
	{
		'Q' : 'Can an unlicensed person legally sign documents in a sale for a buyer or seller, under a power of attorney?',
		'A1' : 'Yes, but only in isolated instances.',
		'A2' : 'Yes, this is a way to be a legal real estate sales agent without getting a real estate license.',
		'A3' : 'This is not allowed under any circumstances.',
		'A4' : 'Yes, as long as they are working under the direction of a broker.',
		'Correct' : 'A1',
		'Response' : 'Only in isolated situations regarding real property (typically the sale of just one property) can a power of attorney make a person exempt from having a license.'
	},
	
	{
		'Q' : 'Those guilty of practicing real estate without a license would be prosecuted by the:',
		'A1' : 'County attorney',
		'A2' : 'Real Estate Commission',
		'A3' : 'Real Estate Director',
		'A4' : 'State Attorney General\'s office',
		'Correct' : 'A1',
		'Response' : 'This responsibility has been set forth in the statute and given to the County Attorney.'
	},
	
	{
		'Q' : 'In order to obtain a real estate broker license, the licensee must have been a full-time sales agent for:',
		'A1' : 'three of the last five years.',
		'A2' : 'three consecutive years.',
		'A3' : 'five of the last seven years.',
		'A4' : 'three years, two of which must have been consecutive.',
		'Correct' : 'A1',
		'Response' : 'The three years as an active licensee do not have to be consecutive.  In addition to the years as an active licensee, points will have to be acquired through transactions.'
	},
	
	{
		'Q' : 'The wall license of a licensee who is active should be:',
		'A1' : 'Kept in the broker\'s file.',
		'A2' : 'Displayed on the wall in the broker\'s office.',
		'A3' : 'Hung in the home of the sales agent.',
		'A4' : 'Displayed along with a picture of the agent in the brokers office.',
		'Correct' : 'A1',
		'Response' : 'The wall license is commonly called that because it used to be required to be displayed on the wall.  Now, it is to be kept in the broker\'s file, readily available.'
	},
	
	{
		'Q' : 'If sales agents place their licenses with a property management company they:',
		'A1' : 'can only do property management activities, and not sales of real estate.',
		'A2' : 'can only do property management unless the buyer or seller is a property management client.',
		'A3' : 'must get another license if they want to do sales activities.',
		'A4' : 'must also place their license with a real estate company to do sales.',
		'Correct' : 'A1',
		'Response' : 'If the license is placed with a property management company, then the sales agent can only do property management.  However, a licensee who places his/her license with a real estate company can do any real estate activity, including property management.  The business of a property management company can only be property management.  Licensees are only limited by the company they choose to affiliate with.'
	},
	
	{
		'Q' : 'When a licensee is sitting the model home for a builder/developer and a potential buyer comes in and asks questions, which of the following is true about agency?',
		'A1' : 'The agent should disclose he/she is representing the seller and not the buyer.',
		'A2' : 'The agent represents the seller and the buyer automatically.',
		'A3' : 'The agent becomes a limited agent and should have the buyer sign a limited agency agreement.',
		'A4' : 'The agent will be acting only as the buyer\'s agent.',
		'Correct' : 'A1',
		'Response' : 'Since the agent was hired by the seller, and is sitting there to show the seller\'s property, he/she is the agent of the seller.  By Utah license law, there should be a contract between the agent\'s broker and the seller.  This agency representation, and non-representation of the buyer should be disclosed in writing to the buyer.  Remember, in Utah, real estate agency is never automatic.  The only way the agent could be a limited agent is to first have a contract with both parties to the transaction, then have them both sign agreement to limited agency.'
	},
	
	{
		'Q' : 'Which is NOT a true statement about a construction loan?',
		'A1' : 'The full loan amount is obtained the day the footings are poured.',
		'A2' : 'It is usually a higher interest rate.',
		'A3' : 'The amount of the loan is paid in installments, as work is done.',
		'A4' : 'It will be paid off when the long-term financing is obtained.',
		'Correct' : 'A1',
		'Response' : 'The borrower doesn\'t want to pay any more interest than necessary, and the lender doesn\'t want to give the full amount and have the risk the project may not be completed.  So the loan is paid in installments as various stages of the work are completed and inspections passed.'
	},
	
	{
		'Q' : 'Which of the following is the best comparison of the Confirmation of Agency Disclosure section between the standard Real Estate Purchase Contract and the New Construction Real Estate Purchase Contract?',
		'A1' : 'They both are exactly the same.',
		'A2' : 'The New Construction Real Estate Purchase Contract has an additional line for the builder.',
		'A3' : 'The New Construction Real Estate Purchase Contract assumes the agent is a limited agent.',
		'A4' : 'The standard Real Estate Purchase Contract has a slightly different way of showing limited agency.',
		'Correct' : 'A1',
		'Response' : 'This is simply fact - they are both the same.'
	},
	
	{
		'Q' : 'Z, who has never married or had children, owns a home worth $175,000 which has a mortgage balance of $35,000.  Due to some financial troubles, Z is considering bankruptcy, but would like to not lose the investment in the house.  What is the most Z can protect? ',
		'A1' : '$20,000',
		'A2' : '$40,000',
		'A3' : 'In bankruptcy, none can be protected. ',
		'A4' : '$125,000',
		'Correct' : 'A1',
		'Response' : 'The homestead exemption, should Z choose to file for it, is $20,000 for head of household and $20,000 for a spouse for a maximum total of $40,000.  Z, being single, could only get $20,000 protected.'
	},
	
	{
		'Q' : 'A homestead exemption would take priority over:',
		'A1' : 'business debts entered into prior to the recording of the homestead.',
		'A2' : 'property taxes against the homestead property.',
		'A3' : 'a first mortgage debt against the homestead property.',
		'A4' : 'a second mortgage held by your father-in-law.',
		'Correct' : 'A1',
		'Response' : 'Security interests created to purchase a home, as well as property taxes and unpaid child support are paid before the homestead exemption takes effect.  The homestead exemption was designed to protect a portion of equity to give the person in financial trouble a chance at a new start.  If there is no equity, there is no protection.'
	},
	
	{
		'Q' : 'The only remedy for a mechanic\'s lien is:',
		'A1' : 'foreclosure.',
		'A2' : 'injunction.',
		'A3' : 'judgment.',
		'A4' : 'attachment.',
		'Correct' : 'A1',
		'Response' : 'The only means a mechanic has to get his/her money is to foreclose.  However, if the amount owed were small compared to the equity in the property, the court, acting on what it considers equitable, could change the outcome to a personal judgment.  An injunction is a court order to stop someone from doing something.  Judgment is a court decision in a lawsuit, and attachment is the court seizing property to cover a debt incurred in a judgment.'
	},
	
	{
		'Q' : 'The owner engaged a mechanic to do some repairs on an investment property.  The mechanic did the repairs.  When payment was requested, the owner didn\'t pay.  Accordingly, the mechanic immediately filed a mechanic\'s lien against the property.  Three months later, still having received no payment for the services, the mechanic took legal action against the owner.  The court found in the mechanic\'s favor and foreclosure action proceeded.  Is this, in fact, a way a mechanic\'s lien could be satisfied?',
		'A1' : 'This is exactly the way it could happen.',
		'A2' : 'Yes, except there are special foreclosure procedures for mechanics\' liens.',
		'A3' : 'Since the property is not the personal residence of the debtor, he would have to satisfy the lien as though it were an unsecured note.',
		'A4' : 'The lien would be satisfied by a deed in lieu of foreclosure.',
		'Correct' : 'A1',
		'Response' : 'This is the way it would be done, regardless of what type of property was involved.  There are no special procedures, though the time limit for filing the lien is slightly different if it is residential property.  A deed in lieu of foreclosure is not applicable in this situation.'
	},
	
	{
		'Q' : 'If the holder of a mechanic\'s lien fails to initiate the foreclosure process within the period allowed by the Statue of Limitations, what is the result?',
		'A1' : 'The right to foreclose is lost.',
		'A2' : 'The defendant must pay immediately.',
		'A3' : 'The lien against the property is automatically removed from the county records.',
		'A4' : 'The amount of the lien is doubled.',
		'Correct' : 'A1',
		'Response' : 'Though he/she loses the right to foreclose, the lien remains in place.  It remains a cloud on the title of the property and will always show up in a title search.  When the sellers get ready to sell, they will probably pay the debt.'
	},
	
	{
		'Q' : 'Once a mechanic\'s lien has been placed against a property, its priority against all other liens (except property taxes and municipal improvement liens) begins to run as of:',
		'A1' : 'the day the work was started.',
		'A2' : 'the day the work was completed.',
		'A3' : 'the day the lien was filed.',
		'A4' : 'the day the work was contracted to be done.',
		'Correct' : 'A1',
		'Response' : 'The lien can\'t be placed until work is complete and default happens.  However, when and if it is placed, the effective date of the lien will be retroactive back to the day that work began.'
	},
	
	{
		'Q' : 'The Utah Uniform Land Sales Practices Act is administered by the Utah:',
		'A1' : 'Real Estate Division.',
		'A2' : 'State Engineer\'s Office',
		'A3' : 'Department of Natural Resources.',
		'A4' : 'Bureau of Land Management.',
		'Correct' : 'A1',
		'Response' : 'That is one of the responsibilities of the real estate division that extends beyond licensing issues.'
	},
	
	{
		'Q' : 'All water in Utah, subject to rights existing prior to 1897 or 1935, is the property of:',
		'A1' : 'the public.',
		'A2' : 'individual counties.',
		'A3' : 'mutual water companies or corporations.',
		'A4' : 'private owners.',
		'Correct' : 'A1',
		'Response' : 'In 1897 Utah declared by statute that all surface water that was not already apportioned out as water rights belonged to the public, or the state.  In 1935 they finished the job by extending the ownership to subsurface water as well.'
	},
	
	{
		'Q' : 'Which of the following methods is the legal means of distributing water rights in Utah?',
		'A1' : 'Prior appropriation',
		'A2' : 'Adverse possession',
		'A3' : 'Prescriptive rights',
		'A4' : 'Riparian rights',
		'Correct' : 'A1',
		'Response' : 'Though most states use some form of riparian rights for distributing water, Utah and several other arid states in the west use prior appropriation (also known as statutory appropriation).  Prior appropriation is based on the concept that the water will have to be moved from where it is to where it is needed.  Therefore, it is apportioned on a first come, first served basis.  Therefore, it is possible that a person whose need is far away from the water source may receive the water, while someone living close by cannot.'
	},
	
	{
		'Q' : 'In Utah, the boundary of property adjoining a non-navigable stream extends to:',
		'A1' : 'the middle of the stream.',
		'A2' : 'the edge of the stream.',
		'A3' : 'either, depending on the circumstance.',
		'A4' : 'the point specified in the deed.',
		'Correct' : 'A1',
		'Response' : 'Since all natural streams belong to the state, they have set the boundary at the middle of the stream.  However, they have also retained easements up to ten feet on each side of the streams for maintenance and fishing purposes.  Remember that Utah uses riparian law in determining boundaries.'
	},
	
	{
		'Q' : 'According to the Marketable Record Title Act, certain old encumbrances  which have not been acted upon, can be extinguished after:',
		'A1' : '40 years',
		'A2' : '7 years ',
		'A3' : '25 years',
		'A4' : '20 years',
		'Correct' : 'A1',
		'Response' : 'This is a matter of statute.  Seven years is the time period for adverse possession, and 20 years is the period for a prescriptive easement. '
	},
	
	{
		'Q' : 'A home is sold in foreclosure under a Trust Deed and Note.    The beneficiary bid $68,000 to cover the first mortgage.  An investor bid and bought the property for $75,000.  The original owners of the home, Mr. and Mrs. Fredrickson, a childless couple, have recorded a Declaration of Homestead on the home.  How much money will the Fredrickson\'s be able to protect as a result of recording their Declaration of Homestead?',
		'A1' : '$7,000',
		'A2' : '$0.00',
		'A3' : '$40,000',
		'A4' : '$20,000',
		'Correct' : 'A1',
		'Response' : 'The homestead exemption is $20,000 for head of household and spouse, totaling a possible $40,000.  However, the homestead exemption protects a portion of equity, if any, and in this case there is only $7,000 of equity.'
	},
	
	{
		'Q' : 'Q was hired by the "Have a Great Time" condominium timeshare project to market timeshare interests to the public.  Besides being hired and trained by the owners, what does Q have to do to satisfy state licensing requirements?',
		'A1' : 'Register with the Real Estate Division',
		'A2' : 'Obtain a real estate license',
		'A3' : 'Attend a half-day seminar given by the Real Estate Division',
		'A4' : 'Register with the SEC',
		'Correct' : 'A1',
		'Response' : 'Those selling timeshare interests are selling personal property, not real property, and therefore they do not need a license.  They only have to register with the real estate division.  If a real estate licensee is going to market timeshares, they still have to register with the Division, but their registration fee is waived.  If the timeshare does carry with it a small percentage of ownership, the sales persons would need to be licensed. '
	},
	
	{
		'Q' : 'In order for homeowners to recieve the protection offered by the Residence Lien Restriction and Lien Recovery Fund Act, they must meet certain requirements.  Which of those listed below does not apply?',
		'A1' : 'Have the agreement on a New Construction REPC',
		'A2' : 'Have a written agreement with a licensed contractor',
		'A3' : 'Have a building permit',
		'A4' : 'Pay the contractor in full',
		'Correct' : 'A1',
		'Response' : 'The contract between the general contractor and the homeowner could be for many things other than construction of a new home:  finish a basement, build a garage, etc.  The REPC is not a requirement under this Act.'
	},
	
	{
		'Q' : 'The general contractor remodeling a kitchen filed a Notice of Commencement under the State Construction Registry.  Two weeks later, Pete the Plumber was hired.  Pete had never heard of the Construction Registry.  When the job was all done, Pete did not get paid.  What rights does he have?',
		'A1' : 'None',
		'A2' : 'He can sue the general contractor',
		'A3' : 'He could still file a Notice of Completion up to 120 days later',
		'A4' : 'He can sue the owner',
		'Correct' : 'A1',
		'Response' : 'The point of this registry is visibility.  It is a public record of all those working on this particular project who are entitled to be paid.  Once a Notice of Completion has been filed, everyone is put on notice that if they have not been paid, they only have 90 days to pursue their rights.  Since Pete didn\'t file a Preliminary Notice, as he should have within 20 days of starting his work, was not in the registry and didn\'t receive notice of the 90-day clock ticking away.'
	},
	
	{
		'Q' : 'Which of the following statements describes what is required of UCA 57-1-37 regarding stigmatized properties?',
		'A1' : 'Neither owner nor agent are liable for failing to disclose the stigma',
		'A2' : 'The owner must disclose any stigmatized issue in writing',
		'A3' : 'The agent knows a murder happened there, so it must be disclosed proactively',
		'A4' : 'Anything perceived as a stigma by a potential buyer must be disclosed',
		'Correct' : 'A1',
		'Response' : 'In Utah, it is not required of owner or agent to disclose issues relating to stigmatized property.  HOWEVER, REMEMBER, YOU CANNOT LIE!  If you are asked a question point blank, and you really do know the answer (it\'s not just a rumor you\'ve heard), you have to answer honestly.  Prepare your seller for that fact.'
	},
	
	{
		'Q' : 'Double contracts are used to:',
		'A1' : 'deceive the mortgagee.',
		'A2' : 'deceive the broker.',
		'A3' : 'deceive the mortgagor.',
		'A4' : 'illegally collect two commissions from the seller.',
		'Correct' : 'A1',
		'Response' : 'In a double contract, the buyer and seller agree to the terms of the sale in one contract.  Then another contract is created that alters the terms in such a way to make it easier to obtain a loan, by deceiving the lender.  This is loan fraud.  The buyer and seller are the parties to a double contract. '
	},
	
	{
		'Q' : 'The Britten\'s received an offer with a closing date of 4/28.  They are satisfied with everything in the offer, but just want to change the date to the 27th of April.  Which of the follow is indicated in the Administrative Rules as the correct way to make a counteroffer to an offer received by a buyer or seller?',
		'A1' : 'Use the State-approved Addendum form',
		'A2' : 'Line out 28, clearly write 27 and have all parties initial the change.',
		'A3' : 'ine out 28, write 27, have all parties initial and date the change.',
		'A4' : 'White out 28, write 27 over the top and get initials and dates from all parties.',
		'Correct' : 'A1',
		'Response' : 'The rule clearly specifies that only the addendum should be used for making counteroffers.  It does not matter how small the change to the offer is.'
	},
	
	{
		'Q' : 'George  Salman, a licensed salesperson in Utah, is selling some property which he personally owns to Sally Purchur.  What is the responsibility of George to Sally as far as his holding a license is concerned?',
		'A1' : 'He must voluntarily reveal that he has a real estate license.	',
		'A2' : 'He must voluntarily reveal that he has a license, and who his broker is.',
		'A3' : 'He does not have to reveal anything relative to his license.',
		'A4' : 'He only has to reveal that he has a license if he is asked.',
		'Correct' : 'A1',
		'Response' : 'Licensees, must reveal in writing, that they hold a real estate license when doing real estate business as a buyer, seller, lessor, or lessee.  They have knowledge and expertise the average member of the public does not.  This disclosure is required whether the license is active or inactive.'
	},
	
	{
		'Q' : 'Which of the following is true concerning the process of complaints, hearings and appeals against a real estate licensee?',
		'A1' : 'A  licensee must be given 10 days to respond to the complaint.',
		'A2' : 'If he/she does not respond, the failure to do so will be an additional complaint.',
		'A3' : 'Only legal counsel for the plaintiff can bring a complaint against a licensee.',
		'A4' : 'The Division has 30 days following the hearing to render their decision.',
		'Correct' : 'A1',
		'Response' : 'The licensee has 5 days following the decision to appeal the decision to the courts.	Anyone can bring a complaint, the division has 60 days to announce their decision, and the agent has 30 days to appeal.  However, response to the initial complaint must be made with in 10 days.'
	},
	
	{
		'Q' : 'The Maxwells have been trying to sell their home for $100,000.  A certified appraiser appraised the home for $100,000.  Since they were unable to sell the house for $100,000, they reduced the price to $80,000.  The buyers have been pre-approved for a loan of 80% of the sales price, so they have the Maxwells sign a second contract showing the purchase price to be $100,000.  This second contract is given to the lender, giving the appearance that the buyers are making a $20,000 down payment.  As a result, the lender grants a loan for $80,000.  Because of this deception the buyers are able to buy for no money down.  Is this illegal?',
		'A1' : 'Yes, the use of a second contract with an inflated price is misrepresentation to the lender.',
		'A2' : 'Yes, because it is illegal to buy real estate with no down payment.',
		'A3' : 'No, because there was an appraisal at $100,000.',
		'A4' : 'No, because as long as the buyer can qualify for the loan, it doesn\'t matter to the lender what price was paid for the house. ',
		'Correct' : 'A1',
		'Response' : 'This is an example of a double contract and is absolutely illegal.'
	},
	
	{
		'Q' : 'Which can an unlicensed assistant legally do?',
		'A1' : 'Sit an open house with the agent present',
		'A2' : 'Show a home listed by his/her employer',
		'A3' : 'Make calls to obtain listing appointments',
		'A4' : 'Answer phone inquiries from other agents about the property',
		'Correct' : 'A1',
		'Response' : 'The unlicensed assistant can sit there and act as a receptionist, but not quote prices, show the property, or give any information about the property.  '
	},
	
	{
		'Q' : 'If asked by the buyer and seller to fill out two contracts for the same transaction, the agent should:',
		'A1' : 'Advise the buyer and seller it is illegal and refuse to do so.',
		'A2' : 'Inform them in writing of the possible complications, then write it if they still want to.',
		'A3' : 'There is no problem with two contracts, as long as buyer and seller both agree to the process.',
		'A4' : 'Tell them this violates the Limitations of Actions Act.',
		'Correct' : 'A1',
		'Response' : 'This sounds like a developing double contract situation.  If so, it is entirely illegal and if the buyer and seller insist on proceeding, the agent should withdraw from the transaction.'
	},
	
	{
		'Q' : 'Under Utah Law, what is the principal broker\'s responsibility in relation to the sales agents and associate brokers licensed under him/her?',
		'A1' : 'Exercise active and reasonable supervision over their activities.',
		'A2' : 'Provide strict supervision.',
		'A3' : 'Require a minimum two-day training course for new agents.',
		'A4' : 'Review and approve every contract they write.',
		'Correct' : 'A1',
		'Response' : 'There are no training requirements given by the state.  Though they don\'t require strict supervision, or micro management, they do expect active supervision given in a reasonable way.  Branch brokers and sales trainers can all be part of the supervision process.'
	},
	
	{
		'Q' : 'What is the definition of a double commission?',
		'A1' : 'A seller is required to pay two commissions in the same transaction.',
		'A2' : 'There are two contracts, one to deceive the lender.',
		'A3' : 'The commission is split between two cooperating brokers.',
		'A4' : 'The commission in the listing is doubled because the agent represented both the buyer and the seller in the transaction.',
		'Correct' : 'A1',
		'Response' : 'The licensees involved in a transaction have a duty to see that the seller is not put in the position of paying two commissions in the same transaction.  If they work with a cooperating broker contract and share the commission, the seller pays once and everyone is taken care of.'
	},	
	
	{
		'Q' : 'The agent is going to receive a small fee for the seller buying a home owner warranty from the company the agent referred them to.  Which statement is correct for this situation?',
		'A1' : 'Any fee in addition to the commission must be disclosed in writing to all parties.',
		'A2' : 'If the fee is under $50 it need not be disclosed.',
		'A3' : 'An agent cannot receive any fees other than the commission.',
		'A4' : 'If the seller is purchasing the warranty, only the buyer needs to be notified.',
		'Correct' : 'A1',
		'Response' : 'The Administrative Rules are clear.  Any fees received, other than the commission, must be disclosed in writing to all parties.'
	},
	
	{
		'Q' : 'In marketing undivided fractionalized long-term estates, the required written disclosures about the sponsor and sponsor\'s affiliates must include all of the following EXCEPT:',
		'A1' : 'Whether the sponsor is a corporation, LLC, or partnership',
		'A2' : 'Financial information',
		'A3' : 'Existence of a master lease tenant',
		'A4' : 'Whether the sponsor a third-party service provider',
		'Correct' : 'A1',
		'Response' : 'The nature of the business organization selling the estates is not required in the disclosure to a potential purchaser.'
	}
);