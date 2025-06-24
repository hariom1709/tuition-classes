import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Trophy, Award, Star, Calendar, BookOpen } from "lucide-react";
const Results = () => {
  const toppers = [{
    id: 1,
    name: "Hari Om",
    subject: "Chemistry",
    score: 95,
    class: "12th",
    board: "CBSE",
    year: "2023-24",
    image: "/lovable-uploads/2fe22783-5d5b-41fa-9870-27e380f8aa1c.png"
  }, {
    id: 2,
    name: "Tushar",
    subject: "Chemistry",
    score: 95,
    class: "12th",
    board: "CBSE",
    year: "2023-24",
    image: "/lovable-uploads/f5865582-6a26-4e4a-b37b-5f0a9b073222.png"
  }, {
    id: 3,
    name: "Tarun",
    subject: "Mathematics",
    score: 90,
    class: "12th",
    board: "CBSE",
    year: "2024-25",
    image: "/lovable-uploads/5bcf21ee-db03-4b5f-a8de-58307437bad9.png"
  }];
  return <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Trophy className="h-16 w-16 mx-auto mb-4 text-yellow-300" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Top Results</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Celebrating the outstanding achievements of our students who have excelled in their board examinations
          </p>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Top Performers</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our students consistently achieve excellent results in their board examinations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toppers.map(student => <Card key={student.id} className="shadow-lg border-0 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img src={student.image} alt={student.name} className="w-full h-48 object-scale-down" />
                  <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full font-bold text-sm">
                    <Star className="h-4 w-4 inline mr-1" />
                    {student.score}%
                  </div>
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{student.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <div className="flex items-center justify-center space-x-2">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                    <span className="font-semibold text-lg">{student.subject}</span>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-3 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Class:</span>
                      <span className="font-semibold">{student.class}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Board:</span>
                      <span className="font-semibold">{student.board}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Year:</span>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4 text-green-600" />
                        <span className="font-semibold">{student.year}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-2 text-green-600 font-bold text-lg">
                    <Award className="h-5 w-5" />
                    <span>Score: {student.score}%</span>
                  </div>
                </CardContent>
              </Card>)}
          </div>

          {/* Statistics Section */}
          <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">Our Track Record</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
                <div className="text-gray-600">Average Success Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">100+</div>
                <div className="text-gray-600">Students Qualified</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-600 mb-2">90+</div>
                <div className="text-gray-600">Average Score</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Results;
