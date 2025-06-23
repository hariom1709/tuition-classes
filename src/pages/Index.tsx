import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { GraduationCap, Users, BookOpen, Trophy, CheckCircle } from "lucide-react";
const Index = () => {
  const features = [{
    icon: <Users className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />,
    title: "Expert Faculty",
    description: "Learn from experienced teachers with proven track records"
  }, {
    icon: <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />,
    title: "Comprehensive Courses",
    description: "Complete coverage of Mathematics, Physics, Chemistry, and Biology"
  }, {
    icon: <Trophy className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-600" />,
    title: "Proven Results",
    description: "High success rates and excellent student performance"
  }];
  const benefits = ["Small batch sizes for personalized attention", "Regular assessments and progress tracking", "Flexible timing options", "Affordable fee structure", "Experienced and qualified teachers", "Study materials provided"];
  return <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              LEARN FROM EXPERTS
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-blue-100 max-w-3xl mx-auto px-4">
              Unlock your potential with our expert tuition classes. 
              Quality education for Mathematics, Physics, Chemistry, and Biology.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
              <Link to="/courses">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg w-full sm:w-auto min-w-[160px]">
                  View Courses
                </Button>
              </Link>
              <Link to="/results">
                
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Why Choose Our Classes?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              We provide exceptional learning experiences tailored to each student's needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => <Card key={index} className="text-center p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardContent className="pt-4 sm:pt-6">
                  <div className="flex justify-center mb-3 sm:mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
                  {feature.title === "Proven Results" && <Link to="/results" className="inline-block mt-3">
                      <Button variant="outline" size="sm" className="mt-2">
                        View Results
                      </Button>
                    </Link>}
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                What Makes Us Different?
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                At SS Classes, we believe in nurturing each student's unique potential through personalized attention and proven teaching methodologies.
              </p>
              <div className="space-y-3 sm:space-y-4">
                {benefits.map((benefit, index) => <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{benefit}</span>
                  </div>)}
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-blue-100 max-w-2xl mx-auto px-4">
            Join hundreds of successful students who have achieved their academic goals with us
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <Link to="/results">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg w-full sm:w-auto min-w-[160px]">
                View Our Results
              </Button>
            </Link>
            <Link to="/courses">
              
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Index;