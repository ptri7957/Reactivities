using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Persistence;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private readonly DataContext _context;
        public ValuesController(DataContext context) {
            _context = context;
        }

        // GET api/values
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Value>>> Get()
        {
            // Returns our db request as a list. Since HTTP requests are
            // asynchronous, we use async/await
            var values = await _context.Values.ToListAsync();
            return Ok(values);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Value>> Get(int id)
        {
            Value value = await _context.Values.FindAsync(id);
            if (value == null) {
                return NotFound(404);
            }
            return Ok(value);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] Value value)
        {
            _context.Values.Add(value);
            _context.SaveChanges();
            Console.WriteLine("New value has been saved successfully");
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public async void Delete(int id)
        {
            var checkIfExists = await _context.Values.FindAsync(id);
            if (checkIfExists == null) {
                NotFound(404);
            }
            Value value = new Value() { Id = id };
            _context.Values.Remove(value);
        }
    }
}
