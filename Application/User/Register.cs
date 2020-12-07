using System;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Application.Errors;
using Application.Interfaces;
using Domain;
using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.User
{
    public class Register
    {
        public class Command : IRequest<User>
        {
            public string DisplayName { get; set; }
            public string Username { get; set; }
            public string Email { get; set; }
            public string Password { get; set; }
        }

        public class CommandValidator : AbstractValidator<Command>
        {
            public CommandValidator()
            {
                RuleFor(x => x.DisplayName).NotEmpty();
                RuleFor(x => x.Username).NotEmpty();
                RuleFor(x => x.Email).NotEmpty();
                RuleFor(x => x.Password).NotEmpty().MinimumLength(6);
            }
        }

        public class Handler : IRequestHandler<Command, User>
        {
            private readonly UserManager<AppUser> _userManager;
            private readonly IJwtGenerator _jwtGenerator;
            private readonly DataContext _context;
            public Handler(DataContext context, UserManager<AppUser> userManager, IJwtGenerator jwtGenerator)
            {
                _context = context;
                _jwtGenerator = jwtGenerator;
                _userManager = userManager;

            }
            // Logic:
            // Check if user's email already exists in the DB and throw exception (Any(condition))
            // Create new AppUser (Domain) using request body
            // Add and save new user to DB
            // Create new user object containing display name, username, token (CreateToken)
            public async Task<User> Handle(Command request, CancellationToken cancellationToken)
            {
                if(await _context.Users.AnyAsync(x => x.Email == request.Email)){
                    throw new RestException(HttpStatusCode.BadRequest, new {
                        Username = "Username already exists"
                    });
                }

                var user = new AppUser {
                    DisplayName = request.DisplayName,
                    Email = request.Email,
                    UserName = request.Username

                };

                await _context.Users.AddAsync(user);
                
                var success = await _context.SaveChangesAsync() > 0;

                if (success)
                {
                    return new User {
                        DisplayName = request.DisplayName,
                        Token = _jwtGenerator.CreateToken(user),
                        Username = request.Username
                    };
                }
                else 
                {
                    throw new Exception("Problem saving changes");
                }
            }
        }
    }
}