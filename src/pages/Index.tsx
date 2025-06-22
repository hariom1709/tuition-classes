import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { GraduationCap, Users, BookOpen, Trophy, CheckCircle } from "lucide-react";
const Index = () => {
  const features = [{
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: "Expert Faculty",
    description: "Learn from experienced teachers with proven track records"
  }, {
    icon: <BookOpen className="h-8 w-8 text-green-600" />,
    title: "Comprehensive Courses",
    description: "Complete coverage of Mathematics, Physics, Chemistry, and Biology"
  }, {
    icon: <Trophy className="h-8 w-8 text-yellow-600" />,
    title: "Proven Results",
    description: "High success rates and excellent student performance"
  }];
  const benefits = ["Small batch sizes for personalized attention", "Regular assessments and progress tracking", "Flexible timing options", "Affordable fee structure", "Experienced and qualified teachers", "Study materials provided"];
  return <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">LEARN FROM EXPERTS</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Unlock your potential with our expert tuition classes. 
              Quality education for Mathematics, Physics, Chemistry, and Biology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/courses">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
                  View Courses
                </Button>
              </Link>
              <Link to="/contact">
                
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Classes?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide exceptional learning experiences tailored to each student's needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What Makes Us Different?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                At Excellence Tuition, we believe in nurturing each student's unique potential through personalized attention and proven teaching methodologies.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>)}
              </div>
            </div>
            <div className="relative">
              
              
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join hundreds of successful students who have achieved their academic goals with us
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
              Enroll Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Index;