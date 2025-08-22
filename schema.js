// #### **Product Schema**

// - `name`

//   - Type: String
//   - Required: true
//   - Purpose: Product’s display name

// - `category`

//   - Type: String
//   - Required: true
//   - Enum: \['electronics', 'fashion', 'home', 'books']
//   - Purpose: Product classification

// - `price`

//   - Type: Number
//   - Required: true
//   - Minimum: 1
//   - Purpose: Price of the product in INR

// - `inStock`

//   - Type: Boolean
//   - Default: true
//   - Purpose: Availability of the product

// - `releaseDate`

//   - Type: Date
//   - Optional
//   - Purpose: Launch date of the product

// - `reviews`

//   - Type: Array of ObjectIds
//   - Ref: 'Review'
//   - Purpose: List of reviews received for this product

// #### **Review Schema**

// - `reviewerName`

//   - Type: String
//   - Required: true
//   - Purpose: Name of the reviewer

// - `rating`

//   - Type: Number
//   - Required: true
//   - Min: 1
//   - Max: 5
//   - Purpose: Rating score given to the product

// - `comment`

//   - Type: String
//   - Optional
//   - Purpose: Text feedback

// - `createdAt`

//   - Type: Date
//   - Default: current date
//   - Purpose: Time of review submission

// - `product`

//   - Type: ObjectId
//   - Ref: 'Product'
//   - Required: true
//   - Purpose: The product being reviewed
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: true,
        enum: ['electronics', 'fashion', 'home', 'books']
    },
    price: {
        type: Number,
        required: true,
        min: 1
    },
    inStock: {
        type: Boolean,
        default: true
    },
    releaseDate: Date,
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }]
});

const reviewSchema = new mongoose.Schema({
    reviewerName: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    comment: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    }
});

const Product = mongoose.model('Product', productSchema);
const Review = mongoose.model('Review', reviewSchema);

module.exports = {
    Product,
    Review
};

