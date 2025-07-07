import Image from "next/image"
import { Search, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Component() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b">
        <div className="flex items-center space-x-8">
          <div className="text-xl font-bold text-primary-500">Bold Brew</div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-primary-500">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-primary-500">
              Products
            </a>
            <a href="#" className="text-gray-600 hover:text-primary-500">
              About Us
            </a>
            <a href="#" className="text-gray-600 hover:text-primary-500">
              Contact
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            size="sm"
            className="border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white bg-transparent"
          >
            Sign In
          </Button>
          <Search className="w-5 h-5 text-gray-600" />
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary-500 text-sm font-medium mb-2">Pure Coffee Nothing Extra</p>
            <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-6">Cold Brew</h1>
            <p className="text-gray-600 mb-8 max-w-md">
              Cold brew is made by steeping coarsely ground coffee beans in cold water for an extended period, typically
              12-24 hours. This slow extraction process results in a smooth, less acidic coffee concentrate that can be
              served over ice or mixed with milk or water.
            </p>
            <div className="flex items-center space-x-4">
              <Button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3">Buy Now</Button>
              <div className="text-right">
                <p className="text-sm text-gray-500">Price</p>
                <p className="text-2xl font-bold">$14.99</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-[600px] relative">
              <Image
                src="/placeholder.svg?height=600&width=400"
                alt="Cold Brew Coffee"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Brewing success one sip at a time</h2>
          <p className="text-gray-600 mb-12">
            Committed to delivering the perfect cold brew experience, we've built our reputation one satisfied customer
            at a time.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-primary-500 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-500">10K+</span>
              </div>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-primary-500 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-500">50K+</span>
              </div>
              <p className="text-gray-600">Cups Served</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-primary-500 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-500">50+</span>
              </div>
              <p className="text-gray-600">Coffee Varieties</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Brewing Boldness, Fueling Hustlers—</h2>
          <h2 className="text-4xl font-bold text-center mb-16">Crafted for Those Who Never Settle.</h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Coffee beans"
                width={300}
                height={300}
                className="rounded-full"
              />
            </div>
            <div className="bg-primary-50 p-8 rounded-lg">
              <p className="text-gray-600 leading-relaxed">
                At Bold Brew, we believe great coffee starts with exceptional beans and meticulous craftsmanship. Our
                cold brew process extracts the smoothest, most flavorful coffee while maintaining the natural oils and
                subtle notes that make each sip extraordinary.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-primary-100 p-8 rounded-lg">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Coffee varieties"
                width={400}
                height={200}
                className="w-full rounded-lg mb-4"
              />
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed">
                Whether you're starting your morning routine or need an afternoon pick-me-up, our carefully curated
                selection of cold brew varieties offers something for every palate. From bold and robust to smooth and
                mellow, discover your perfect brew.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Find Your Perfect Brew</h2>
          <p className="text-center text-gray-600 mb-12">Shop the Collection</p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <Image
                src="/placeholder.svg?height=200&width=150"
                alt="Pure Black"
                width={150}
                height={200}
                className="mx-auto mb-4"
              />
              <h3 className="font-bold mb-2">Pure Black</h3>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary-500 text-primary-500" />
                ))}
              </div>
              <Button
                variant="outline"
                className="w-full border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white bg-transparent"
              >
                Add to Cart
              </Button>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <Image
                src="/placeholder.svg?height=200&width=150"
                alt="Mocha Fix"
                width={150}
                height={200}
                className="mx-auto mb-4"
              />
              <h3 className="font-bold mb-2">Mocha Fix</h3>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary-500 text-primary-500" />
                ))}
              </div>
              <Button
                variant="outline"
                className="w-full border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white bg-transparent"
              >
                Add to Cart
              </Button>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <Image
                src="/placeholder.svg?height=200&width=150"
                alt="Iced Cold Brew"
                width={150}
                height={200}
                className="mx-auto mb-4"
              />
              <h3 className="font-bold mb-2">Iced Cold Brew</h3>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary-500 text-primary-500" />
                ))}
              </div>
              <Button
                variant="outline"
                className="w-full border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white bg-transparent"
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Fuel Your Day with Bold Brew</h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <div className="w-80 h-80 rounded-full border-4 border-primary-500 p-4">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Coffee beans in bowl"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Every cup of Bold Brew starts with carefully selected premium coffee beans, sourced from the world's
                finest coffee-growing regions. Our commitment to quality means we work directly with farmers who share
                our passion for exceptional coffee.
              </p>
              <Button className="bg-primary-500 hover:bg-primary-600 text-white">Explore More</Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">The Brew</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our signature cold brew process takes time, patience, and precision. We steep our carefully ground beans
                for 18-24 hours in cold, filtered water, allowing the natural flavors to develop slowly and completely.
                The result is a smooth, rich concentrate that forms the foundation of every Bold Brew experience.
              </p>
              <Button className="bg-primary-500 hover:bg-primary-600 text-white">Explore Now</Button>
            </div>
            <div className="relative">
              <div className="w-80 h-80 rounded-full border-4 border-primary-500 p-4 ml-auto">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Cold brew glass"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  alt="Customer"
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-sm text-gray-600">Coffee Enthusiast</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Bold Brew has completely changed my morning routine. The smooth, rich flavor is unlike any cold brew
                I've tried before. It's become an essential part of my day!"
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  alt="Customer"
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold">Mike Chen</h4>
                  <p className="text-sm text-gray-600">Business Owner</p>
                </div>
              </div>
              <p className="text-gray-600">
                "As someone who drinks coffee all day, I appreciate the smooth, less acidic taste of Bold Brew. It gives
                me the energy I need without the jitters."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">Our Newsletter</h2>
              <div className="relative">
                <div className="w-64 h-64 rounded-full border-4 border-primary-500 p-4">
                  <Image
                    src="/placeholder.svg?height=240&width=240"
                    alt="Newsletter illustration"
                    width={240}
                    height={240}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="bg-primary-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Stay Fueled. Stay Bold.</h3>
              <p className="text-gray-600 mb-6">
                Get the latest updates on new products, brewing tips, and exclusive offers delivered straight to your
                inbox. Join our community of coffee lovers and never miss out on the bold experience.
              </p>
              <div className="flex gap-4">
                <Input placeholder="Enter your email" className="flex-1 border-primary-200 focus:border-primary-500" />
                <Button className="bg-primary-500 hover:bg-primary-600 text-white">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-900 text-white px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Bold Brew</h3>
              <p className="text-primary-200 text-sm">
                Crafting exceptional cold brew experiences for coffee lovers everywhere.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-primary-200">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Press
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-primary-200">
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Shipping
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Returns
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-primary-200">
                <li>
                  <a href="#" className="hover:text-white">
                    Newsletter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-800 mt-8 pt-8 text-center text-sm text-primary-200">
            <p>&copy; 2024 Bold Brew. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
