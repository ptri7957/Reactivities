using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using Persistence;
using Microsoft.EntityFrameworkCore;
using MediatR;
using Application.Activities;

namespace API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Since we are injecting DataContext in our projects, we need to add it as a service
            services.AddDbContext<DataContext>(opt => opt.UseSqlite(Configuration.GetConnectionString("DefaultConnection")));
            services.AddControllers();
            // Add CORS
            services.AddCors(opt => opt.AddPolicy("CorsPolicy", policy => policy.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:3000")));
            // Since we are injecting MediatR, we need to add this middleware
            services.AddMediatR(typeof(List.Handler).Assembly);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            // Redirects http protocols to https
            // app.UseHttpsRedirection();

            // Routes to the appropriate controller
            app.UseRouting();

            app.UseAuthorization();

            // Inject CORS middleware
            app.UseCors("CorsPolicy");

            // Map the controller endpoints to our API
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}