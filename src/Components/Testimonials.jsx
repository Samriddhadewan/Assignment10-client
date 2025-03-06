export default function Testimonials() {
    const testimonials = [
      {
        name: "John Doe",
        review: "This campaign changed my life! Highly recommended!",
        image: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      },
      {
        name: "Jane Smith",
        review: "I love the initiative. It has made a real impact in our community.",
        image: "https://plus.unsplash.com/premium_photo-1689977830819-d00b3a9b7363?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      },
      {
        name: "Michael Brown",
        review: "A fantastic experience. I’m proud to be a part of this movement!",
        image: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      },
    ];
  
    return (
      <section className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">What People Say About Us</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 mx-auto rounded-full mb-4 object-cover" />
                <p className="italic">"{testimonial.review}"</p>
                <h4 className="font-bold mt-4">- {testimonial.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  